import Versiculo from './Versiculo';
import Capitulo from '../capitulos/Capitulo';
import Libro from '../libros/Libro';

const resolvers = {
    Query: {
      versiculos: () => Versiculo.findAll(),
      versiculo: (_, args) => Versiculo.findOne({
        where:{num_versiculo:args.numero},
        include:
          {model:Capitulo,where:{numero_capitulo:args.capitulo},
            include:{model:Libro,where:{nombre:args.libro}}},
        })
      }
};

export default resolvers