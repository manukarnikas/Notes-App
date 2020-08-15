const graphql = require('graphql');
const NoteDao = require('../Methods/NoteDao');

const { GraphQLObjectType, GraphQLString, GraphQLList,GraphQLSchema} = graphql;

const NoteType = new GraphQLObjectType({
    name: 'Note',
    fields: ()=>({
        _id: {type: GraphQLString },
        title: {type: GraphQLString },
        note: {type: GraphQLString },
        createdDate: {type:GraphQLString},
        // lastModifiedDate:{type:GraphQLString}
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        notes: {
            type: new GraphQLList(NoteType),
            resolve(parent,args){
                return NoteDao.getNotes();
            }

        }
    }
})

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields: {
        addNote: {
            type: NoteType,
            args: {
                title: {type: GraphQLString},
                note: {type: GraphQLString},
                createdDate: {type:GraphQLString},
                // lastModifiedDate:{type:GraphQLString}
            },
            resolve(parent,args){
                return NoteDao.addNote(args);
            }
        },
        deleteNote:{
            type: NoteType,
            args: {
                id: {type: GraphQLString} 
            },
            resolve(parent,args){
                return NoteDao.deleteNote(args)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})