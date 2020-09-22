const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolver');

const app = express();
mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true  })
    .then(()=> console.log('connection established'))
    .catch((err)=> console.log(err))

const server = new ApolloServer({typeDefs, resolvers});

const PORT = process.env.PORT || 8080;
server.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT,(() => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
}));
