const graphql = require('graphql');
const graphqldate = require('graphql-iso-date');
const NoteDao = require('../Methods/NoteDao');
;

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList,GraphQLSchema} = graphql;
const { GraphQLDate } = graphqldate;


const NoteType = new GraphQLObjectType({
    name: 'Note',
    fields: ()=>({
        _id: {type: GraphQLID },
        title: {type: GraphQLString },
        note: {type: GraphQLString },
        // createdDate: {type:GraphQLString},
        // lastModifiedDate:{type:GraphQLDate}
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
                // createdDate: {type:GraphQLString},
                // lastModifiedDate:{type:GraphQLDate}
            },
            resolve(parent,args){
                return NoteDao.addNote(args);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})