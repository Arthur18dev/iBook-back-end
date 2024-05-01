const db = require('../db/conexao')


const Logado = async (email, senha) => {

    const result = await db.execute(
        `SELECT * FROM usuarios WHERE email = '${email}' AND senha = '${senha}'`,

    );
    return result
}

module.exports = {
    Logado
}

