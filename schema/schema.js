const graphql = require('graphql');
const _ = require('lodash')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [
    { id: '23', firstName: 'Nick', age: 42},
    { id: '21', firstName: 'Amber', age: 41},
    { id: '19', firstName: 'Scarlett', age: 5},
    { id: '7', firstName: 'Cora', age: 5},
    { id: '9', firstName: 'Kinley', age: 6},
]


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString}, 
        age: {type: GraphQLInt} 
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: {type:  GraphQLString } },
            resolve(parentValue, args) {
                return _.find(users, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})