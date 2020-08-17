const { Libro } = require("./Libro")
const { resolvers } = require('./resolvers')
const { typeDef } = require('./typeDef')

module.exports = {
    Libro,
    resolvers,
    typeDef
}