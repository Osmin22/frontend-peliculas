import {Fragment,useState,useEffect} from 'react'
import {getgenero} from '../../services/genero/genero'
import { Title } from '../ui/title'
import { Modal } from './modal'

export function Getgenero () {
    const [generos,Setgenero] = useState([])

    useEffect(() => {
        listgenero()
    },[])

    const listgenero = async () => {
        try{
            const response = await getgenero() 
            Setgenero(response.data)
        }catch(e){
            console.error(e)
        }
    }

    
    return(<>
        <Title title='Generos'/>
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
            generos.map((person,index) => (<Fragment>
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{person.name}</td>
                    <td>{person.status ? 'Activo':'Inactivo'}</td>
                    <td>{person.description}</td>
                    <td>
                        <button type="button" className="btn btn-danger">Borrar</button>
                        <button type="button" className="btn btn-warning">Editar</button>
                    </td>
                </tr>
            </Fragment>))
        }</tbody>
    </table>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo Genero</button>
    <Modal/>
    </>)
}