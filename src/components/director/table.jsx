import {Fragment} from 'react'

export function Table({directors,borrardirector,editardirector}){


    const borrarElement = (e) => {
        e.preventDefault()
        borrardirector(e)
    }

    const editar = (e) => {
        editardirector(e)
    }

    return(<>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date time of create</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>{
                directors.map((person,index) => (<Fragment>
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{person.name}</td>
                        <td>{person.status ? 'Activo':'Inactivo'}</td>
                        <td>{person.datetimecreate}</td>
                        <td>
                            <button type="button" className="btn btn-danger" id={person._id} onClick={borrarElement} >Borrar</button>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" id={person._id} onClick={editar}>Editar</button>
                        </td>
                    </tr>
                </Fragment>))
            }</tbody>
        </table>
    </>)
}