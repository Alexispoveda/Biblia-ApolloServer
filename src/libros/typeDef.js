const { gql } = require("apollo-server");

const typeDef = gql`

    type Libro {
        id_libro: Int!
        nombre: String!,
        abreviacion: String!,
        testamento: String!,
        qnt_capitulos: Int!,
        capitulos:[Capitulo!]
    }

    extend type Query {
        libros: [Libro],
        libro(nombre:String!): Libro
    }
`;

module.exports = {
  typeDef
};