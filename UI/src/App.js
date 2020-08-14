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
  let notes = props.data.map(item=>{
    return <MainContent key={item._id} note={item} deleteNote={props.delete}/>
  })  
  if(props.data.length){
    return (
      <div className="grid-maincontent">
          <div className="container">
            {notes}
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
      notes: []
    }
    this.reloadNotes  = this.reloadNotes.bind(this);
    this.deleteNote  = this.deleteNote.bind(this);
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
    console.log('-->id',id)
      await client.mutate({
          mutation: deleteNoteMutation,
          variables: {
             id: id
          }
      }).then(res=>{
           let notes = this.state.notes.filter(val=>{
             console.log('val._id',val._id!=id)
             if(val._id!=id)
                return val;
           });
           console.log('notes del',notes)
           this.setState({
             notes: notes
           })
          
      })
  }

  render(){
    return (
        <div className="grid-container">
          <div className="grid-nav">
             <Nav/>
          </div>
          <div className="grid-sidebar">
             <Sidebar reload={this.reloadNotes} />
          </div>
           <Content data={this.state.notes} delete={this.deleteNote}/>
        </div>
    );
  }
}



export default App;
