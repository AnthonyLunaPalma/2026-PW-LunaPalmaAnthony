const pool = require('../db-local');

const COLUMNAS_PUBLICAS = 'id, nombre, correo, boleta, rol';

//Consultar todos los usuarios
async function listar() {
    const [filas] = await pool.query(`SELECT ${COLUMNAS_PUBLICAS} FROM usuarios ORDER BY id`);
    return filas;
}

//Consultar por ID
async function listarPorID() {
    const [filas] = await pool.query(`SELECT ${COLUMNAS_PUBLICAS} FROM usuarios WHERE id = ?`, [id]);
    return filas[0];
}

//Registrar un nuevo usuario
async function crear(nombre, correo, contraseñaHash, boleta, rol) {
    const [info] = await pool.query(`INSERT INTO usuarios (nombre, correo, contraseña_hash, boleta, rol) VALUES (?, ?, ?, ?, ?)`, [nombre, correo, contraseñaHash, boleta, rol || 'alumno']);
    return obtenerPorID(info.insertID);
}

//Actualizar un alumno
async function actualizar(id, {nombre, correo, rol}) {
    const cambios = Object.entries({nombre, correo, rol}).filter(([, valor]) => valor !== undefined);
    if(cambios.length === 0) return obtenerPorID(id);

    const columnas = cambios.map(([columna]) => `${columna} = ?`).join(', ');
    const [info] = await pool.query(`UPDATE usuarios SET ${columnas} WHERE id = ?`, [...cambios.map(([, valor]) => valor), id]);
    if(info.affectedRows === 0) return undefined;
    return obtenerPorID(id);
}

//Eliminar
async function eliminar() {
    const [filas] = await pool.query(`DELETE FROM usuarios WHERE id = ?`, [id]);
    return info.affectedRows > 0;
}

//Buscar por correo
async function buscarPorCorreoConhash(correo) {
    const [filas] = await pool.query('SELECT * FROM usuarios WHERE correo = ?', [correo]);
    return filas[0];
}

//Siempre es necesario exportar ñas funciones para poder crear su api
module.exports = {listar, listarPorID, crear, actualizar, eliminar, buscarPorCorreoConhash};

//Deberan de crear las otras 2 entidades talleres y asistencias
//Para taller hay que crar las funciones de consultar por taller y registrase en un taller
//Para asistencia hay que crear las funciones de registrar asistencia en el taller, consultar lista de asistencias (osea consultar todos los participantes)