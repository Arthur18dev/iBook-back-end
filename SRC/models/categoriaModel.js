const db = require('../db/conexao')


const destaque = async (res) => {

    const valor = db.execute('SELECT * FROM categorias').then(
        (result) => {
            return result
        }
    ).catch(
        (erro) => {
            console.log(erro)
            return []
        }
    )
    return valor
};

module.exports = {
    destaque
}

