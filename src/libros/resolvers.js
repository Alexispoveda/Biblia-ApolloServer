import Libro from './Libro';
import Capitulo from '../capitulos/Capitulo';

const resolvers = {
    Query: {
      libros: () => Libro.findAll(),
      libro: (parent, args) => Libro.findOne({where:{nombre: args.nombre}})
      },
    Libro:{
      capitulos: (parent, args) => Capitulo.findAll({where:{id_libro:parent.id_libro}}),
    }
};

export default resolvers