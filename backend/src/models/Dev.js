const {Schema, model} = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    /* criando um vetor de id, de quais devs estão com likes, relacionado 
        os dados dentro do banco de dados.
    */
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    // creando uma coluna de dados dentro do banco de dados prenchimento automatico.
    timestamps: true,
});
// exportando a conexão do banco de dados
module.exports = model('Dev', DevSchema);