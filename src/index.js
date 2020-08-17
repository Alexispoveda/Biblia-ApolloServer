const { ApolloServer, gql } = require('apollo-server')
const libros = require('./libros')
const capitulos = require('./capitulos')
const versiculos = require('./versiculos')

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
    typeDefs: [typeDef,libros.typeDef,capitulos.typeDef,versiculos.typeDef],
    resolvers:[libros.resolvers,capitulos.resolvers,versiculos.resolvers]
})

server.listen().then(({url}) => {console.log('Apollo Server listo en: '+url)})