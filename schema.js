
const { gql } = require('apollo-server');

exports.typeDefs= gql`
type movie {
    title: String
    year: String
    _id: String
}

type Query {
    getAllMovies: [movie]
}
type Mutation {
    addMovie(title: String!, year: String!, id: String): movie
}
`
