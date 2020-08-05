import React,{Component} from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import gql from 'graphql-tag';
import Nav from './Components/nav';
import Sidebar from './Components/sidebar';
import MainContent from './Components/maincontent';

//client
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
});

//fetch query
const getNotesQuery = gql`
query {
  notes {
    _id
    title
    note
  }
}`;



class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: []
    }
  }

  async componentDidMount(){
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
  

  render(){
    
    var notes = this.state.notes.map(item=>{
      return <MainContent key={item._id} note={item}/>
    })

    return (
      <ApolloProvider client={client}>
        <div className="grid-container">
          <div className="grid-nav">
             <Nav/>
          </div>
          <div className="grid-sidebar">
             <Sidebar/>
          </div>
          <div className="grid-maincontent">
            <div className="container">
             {notes}
             </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
