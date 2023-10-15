import {useState,useEffect,Fragment} from 'react'
import {getdirector} from '../../services/director/director'
import { Title } from '../ui/title'
import { Modal } from './modal'

export function Getdirector(){
    const [directors,Setdirector] = useState([])
    useEffect(() => {
        listdirector()
    },[])
    
    const listdirector = async () => {
        try{
            const {data} = await getdirector() 
            console.log(data)
            Setdirector(data)
        }catch(e){
            console.error(e)
        }
    }
    return(<>
        <Title title='Directores'/>
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
                            <button type="button" className="btn btn-danger">Borrar</button>
                            <button type="button" className="btn btn-warning">Editar</button>
                        </td>
                    </tr>
                </Fragment>))
            }</tbody>
        </table>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo director</button>
        <Modal/>
    </>)
    
}