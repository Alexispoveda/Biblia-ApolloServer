import Capitulo from'./Capitulo';
import Versiculo from'../versiculos/Versiculo';
import Libro from'../libros/Libro';


const resolvers = {
    Query: {
      capitulos: (parent, args) => args.libro ? Capitulo.findAll({include:{model:Libro,where:{nombre: args.libro}}}) :Capitulo.findAll(),
      capitulo: (parent, args) => Capitulo.findOne({where:{numero_capitulo:args.numero},include:{model:Libro,where:{nombre: args.libro}}})
      },
    Capitulo:{
      versiculos: parent => Versiculo.findAll({where:{id_capitulo: parent.id_capitulo}})
    }
};

export default resolvers