const db = require('../db/conexao')


const getAll = async (res) => {
    const valor = db.execute('SELECT * FROM usuarios').then(
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


    const create = async ( nome, email, senha) => {
           // CREATE
    const [{ insertId }] = await db.execute(`INSERT INTO usuarios (nome, email, senha) value("${nome}", "${email}", "${senha}")`);
        return insertId
    }

    const update = async ( nome, email, senha, id) => {
          // EDITAR (PUT)
          const result = await db.execute(`UPDATE usuarios SET nome = "${nome}", email = "${email}", senha =  "${senha}" WHERE id = ${id}`);

          console.log(result)
          return 1
    }

    const deleteUser = async (id) => {
        // DELETE
        return await db.execute(`DELETE FROM usuarios WHERE id = ${id}`);
    }


module.exports = {
    getAll,
    create,
    update,
    deleteUser
}