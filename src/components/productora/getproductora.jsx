import {useState,useEffect,Fragment} from 'react'
import {getproductora} from '../../services/productora/productora'
import { Title } from '../ui/title'
import { Modal } from './modal'
import { Table } from './table'

export function Getproductora () {

    const [productoras,SetProductora] = useState([])

    useEffect(() => {
        listproductora()
    },[])

    const listproductora = async () => {
        try{
            const response = await getproductora()
            SetProductora(response.data)    
        }catch(e){
            console.error(e)
        }
    }

    
    return(<>
        <Title title='Productoras '/>
        <Table productoras={productoras}/>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo(a) productor</button>
        <Modal/>
    </>)
}