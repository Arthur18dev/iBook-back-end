const db = require('../db/conexao')


const destaque = async (nome) => {

    const result = await db.execute(
        `SELECT * FROM usuarios WHERE nome = '${nome}'`,

    );
    return result
}

module.exports = {
    destaque
}

