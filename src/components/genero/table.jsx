import {Fragment} from 'react'

export function Table({generos=[],borrargenero}){

    const borrarElement = (e) => {
        e.preventDefault()
        borrargenero(e)
    }
    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>{
                generos.map((data,index) => (<Fragment>
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{data.name}</td>
                        <td>{data.status ? 'Activo':'Inactivo'}</td>
                        <td>{data.description}</td>
                        <td>
                            <button type="button" className="btn btn-danger" id={data._id} onClick={borrarElement}>Borrar</button>
                            <button type="button" className="btn btn-warning">Editar</button>
                        </td>
                    </tr>
                </Fragment>))
            }</tbody>
    </table>)
}