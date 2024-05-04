const db = require('../db/conexao')


const getAdministrador  = async (res) => {
    const valor = db.execute('SELECT * FROM administrador').then(
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


const create  = async (email, senha) => {
    // CREATE
    const [{ insertId }] = await db.execute(`INSERT INTO administrador (email, senha) value("${email}", "${senha}")`);
    return insertId
}

const update  = async (email, senha, id) => {
    // EDITAR (PUT)
    const result = await db.execute(`UPDATE administrador SET email = "${email}", senha =  "${senha}" WHERE id = ${id}`);

    return result
}

const deleteAdm = async (id) => {
    // DELETE
    return await db.execute(`DELETE FROM administrador WHERE id = ${id}`);
}


module.exports = {
    getAdministrador,
    create,
    update,
    deleteAdm
}