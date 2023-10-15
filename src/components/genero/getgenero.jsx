import {useState,useEffect} from 'react'
import {getgenero} from '../../services/genero/genero'
import { Title } from '../ui/title'
import { Modal } from './modal'
import { Table } from './table'

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
        <Table generos={generos} />
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo Genero</button>
        <Modal/>
    </>)
}