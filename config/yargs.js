const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'

}

const argv = require('yargs')
            .command('crear', 'Crear elemento por hacer',{
                descripcion
            })
            .command('actualizar', 'Actualizar la tarea completada',{
                descripcion,
                completado: {
                    default: true,
                    alias: 'c',
                    desc: 'Marcar completado o pendiente la tarea'
                }
            })
            .command('borrar', 'Borra una tarea de la lista',{
                descripcion
            })
            .help()
            .argv;

module.exports = {
    argv
}