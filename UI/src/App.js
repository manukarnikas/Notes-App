import React,{Component} from 'react';
import './App.css';
import gql from 'graphql-tag';
import Nav from './Components/nav';
import Sidebar from './Components/sidebar';
import MainContent from './Components/maincontent';
import client from './environment/environment';


//fetch query
const getNotesQuery = gql`
query {
  notes {
    _id
    title
    note
  }
}`;

//delete
const deleteNoteMutation = gql`
mutation deleteNote($id: String!) {
  deleteNote (id: $id) {
    _id
  }
}
`;



function Content(props){
   if(props.data.length){
    return (
      <div className="grid-maincontent">
          <div className="container">
            {props.data}
          </div>
      </div>
    );
  }
  return (
    <div>
        <p>No Notes Yet! Why don't you add one?</p>
    </div>
  );
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: [],
      search: ''
    }
    this.reloadNotes  = this.reloadNotes.bind(this);
    this.deleteNote  = this.deleteNote.bind(this);
    this.filter  = this.filter.bind(this);
  }

  async componentWillMount(){
     await client.query({
      query: getNotesQuery
    }).then((res)=>{
       if(res.data.notes){
          this.setState({
            notes: res.data.notes
          })
       }
       else{
         console.log('No data available')
       }
    }).catch((err=>{
      console.log(err)
    }))
  }
  
  reloadNotes(data){
    this.setState(prevState=>{
      let newState = {};
       prevState.notes.push(data);
       newState.notes =  prevState.notes;
       return newState;
    })
  }

  async deleteNote(id){
      await client.mutate({
          mutation: deleteNoteMutation,
          variables: {
             id: id
          }
      }).then(res=>{
           let notes = this.state.notes.filter(val=>{
             if(val._id!=id)
                return val;
           });
           console.log('notes del',notes)
           this.setState({
             notes: notes
           })
          
      })
  }

  filter(data){
    this.setState({
      search: data
    })
  }

  render(){
    var notesData;
    if(this.state.search){
      notesData = this.state.notes.filter(val=>{
         if( val.title.includes(this.state.search) || val.note.includes(this.state.search) )
           return val;
      })
    }
    else{
      notesData = this.state.notes;
    }
    let notes = notesData.map(item=>{
      return <MainContent key={item._id} note={item} deleteNote={this.deleteNote}/>
    })  
    return (
        <div className="grid-container">
          <div className="grid-nav">
             <Nav/>
          </div>
          <div className="grid-sidebar">
             <Sidebar reload={this.reloadNotes} filter={this.filter}/>
          </div>
           <Content data={notes} />
        </div>
    );
  }
}



export default App;
