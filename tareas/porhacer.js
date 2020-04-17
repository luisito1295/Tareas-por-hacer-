const fs = require('fs');

let listadoPorhacer = [];

let guardarDB = () => {
    
    let data = JSON.stringify(listadoPorhacer);

    fs.writeFile('db/data.json', data, (err) => {

        if (err)//{
            throw new Error('No se pudo guardar');
        /*}else{
            resolve('Datos guardados');
        }*/
    });
}

const cargarDB = () =>{
    
    try{
        listadoPorhacer = require('../db/data.json');
    }catch(error){
        listadoPorhacer = [];
    }
    

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorhacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListar = () => {

    cargarDB();

    return listadoPorhacer;

}

const actualizar = (descripcion, completado = true) => {
    
    cargarDB();

    let index = listadoPorhacer.findIndex( tarea =>{
        return tarea.descripcion === descripcion;
    });

    if(index >= 0){
        listadoPorhacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorhacer.filter(tarea =>{
        return tarea.descripcion !== descripcion;
    });

    if(listadoPorhacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorhacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListar,
    actualizar,
    borrar
}