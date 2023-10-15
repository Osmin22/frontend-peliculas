import {Fragment} from 'react'

export function Table({tipos}){
    return(
    <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Date time of create</th>
                <th scope='col'>Descripcion</th>
                <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody>{
            tipos.map((person,index) => (<Fragment>
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{person.name}</td>
                    <td>{person.status ? 'Activo':'Inactivo'}</td>
                    <td>{person.datetimecreate}</td>
                    <td>{person.description}</td>
                    <td>
                        <button type="button" className="btn btn-danger">Borrar</button>
                        <button type="button" className="btn btn-warning">Editar</button>
                    </td>
                </tr>
            </Fragment>))
        }</tbody>
    </table>)
}