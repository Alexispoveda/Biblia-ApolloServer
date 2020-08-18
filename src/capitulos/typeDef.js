import { gql } from "apollo-server";

const typeDef = gql`

    type Capitulo {
        id_capitulo: Int!,
        id_libro:Int!
        numero_capitulo: Int!,
        qnt_versiculos: Int!,
        versiculos: [Versiculo]
    }

    extend type Query {
        capitulos(libro:String): [Capitulo],
        capitulo(numero:Int!,libro:String!): Capitulo
    }
`;

export default typeDef