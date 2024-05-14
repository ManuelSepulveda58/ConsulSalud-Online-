const mssql = require('mssql');

const config = {
    server: 'LAPTOP-E1OBJ6LO\\SQLEXPRESS',
    database: 'MEDICAMENTOS',
    options: {
        trustedConnection: true
    }
};

async function obtenerDatos() {
    try {
        await mssql.connect(config);

        const resultMedicamentos = await mssql.query('SELECT * FROM Medicamentos');
        const resultEnfermedades = await mssql.query('SELECT * FROM Enfermedades');

        return { medicamentos: resultMedicamentos.recordset, enfermedades: resultEnfermedades.recordset };
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    } finally {
        await mssql.close();
    }
}

module.exports = { obtenerDatos };


