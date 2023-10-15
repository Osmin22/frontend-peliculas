import {useState,useEffect,Fragment} from 'react'
import {getmedia} from '../../services/media/media'
import { Title } from '../ui/title'
import { Modal } from './modal'
import { Table } from './table'

export function Getmedia() {
    
    const [media,Setmedia] = useState([])

    useEffect(() => {
        listmedia()
    },[])

    const listmedia = async () => {
        try{
            const response = await getmedia() 
            Setmedia(response.data)
            console.log(response.data)
        }catch(e){
            console.error(e)
        }
    }
    
    return(<>
        <Title title='Medias'/>
        <Table media={media}/>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nueva pelicula</button>
        <Modal/>
    </>)
}