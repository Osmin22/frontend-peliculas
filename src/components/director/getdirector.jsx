import {useState,useEffect,Fragment} from 'react'
import {getdirector} from '../../services/director/director'
import { Title } from '../ui/title'
import { Modal } from './modal'
import { Table } from './table'

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
        <Table directors={directors}/>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo director</button>
        <Modal/>
    </>)
    
}