const db = require('../db/conexao');


const Logado = async (email, senha) => {
    const [row] = await db.execute(
        `SELECT * FROM usuarios WHERE email = '${email}' AND senha = '${senha}'`
    );
    return row;
};





module.exports = {
    Logado
};

