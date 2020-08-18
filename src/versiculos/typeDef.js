import {gql} from "apollo-server";

const typeDef = gql`

    type Versiculo {
        id_versiculo: Int!
        id_capitulo: Int!,
        num_versiculo: Int!,
        texto: String!
    }

    extend type Query {
        versiculos: [Versiculo],
        versiculo(numero:Int!,capitulo:Int!,libro:String!): Versiculo
    }
`;

export default typeDef;