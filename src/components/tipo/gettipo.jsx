import {useState,useEffect} from 'react'
import {gettipo} from '../../services/tipo/tipo'
import { Title } from '../ui/title'
import { Modal } from './modal'
import { Table } from './table'

export function Gettipo () {

    const [tipo,Settipo] = useState([])

    useEffect(() => {
        listtipo()
    },[])

    const listtipo = async () => {
        try{
            const response = await gettipo()
            Settipo(response.data)

        }catch(e){
            console.error(e)
        }
    }


    return(<>
        <Title title='Directores'/>
        <Table tipo={tipo}/>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo tipo</button>
        <Modal />
    </>) 
}