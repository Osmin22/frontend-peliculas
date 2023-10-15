import {Fragment} from 'react'

export function Table({media}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">sinopsis</th>
                    <th scope="col">serial</th>
                    <th scope="col">url</th>
                    <th scope="col">image</th>
                    <th scope="col">datetimecreate</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>{
                media.map((medi,index) => (<Fragment>
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{medi.sinopsis}</td>
                        <td>{medi.serial}</td>
                        <td>{medi.url}</td>
                        <td>{medi.image}</td>
                        <td>{medi.datetimecreate}</td>
                        <td>
                            <button type="button" className="btn btn-danger">Borrar</button>
                            <button type="button" className="btn btn-warning">Editar</button>
                        </td>
                    </tr>
                </Fragment>))
            }</tbody>
        </table>
    )
}