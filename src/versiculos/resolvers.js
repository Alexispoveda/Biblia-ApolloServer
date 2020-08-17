const {Versiculo} = require('./Versiculo');
const {Capitulo} = require('../capitulos/Capitulo');
const {Libro} = require('../libros/Libro');

const resolvers = {
    Query: {
      versiculos: () => Versiculo.findAll(),
      versiculo: (parent, args) => Versiculo.findOne({
        where:{num_versiculo:args.numero},
        include:
          {model:Capitulo,where:{numero_capitulo:args.capitulo},
            include:{model:Libro,where:{nombre:args.libro}}},
        })
      }
};

module.exports = {resolvers}