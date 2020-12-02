import { ApolloServer, gql } from 'apollo-server';
const libros = require('./libros')
const capitulos = require('./capitulos')
const versiculos = require('./versiculos')

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
    typeDefs: [typeDef,libros.typeDef,capitulos.typeDef,versiculos.typeDef],
    resolvers:[libros.resolvers,capitulos.resolvers,versiculos.resolvers],
    engine:{
      reportSchema:true,
      variant:"current"
    }
})

server.listen({ port: process.env.PORT || 4000 }).then(({url}) => {console.log('🚀 Apollo Server listo en: '+url)})