import ApolloClient from 'apollo-boost';

//client
const client = new ApolloClient({
    uri:'http://localhost:4000/graphql'
  });
  

export default  client;
  