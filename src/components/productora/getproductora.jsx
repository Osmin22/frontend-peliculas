import {useState,useEffect,Fragment} from 'react'
import {getproductora, postproductora} from '../../services/productora/productora'
import { Title } from '../ui/title'
import { Modal } from './modal'
import { Table } from './table'
import { Spinner } from '../ui/spinner'
import Swal from 'sweetalert2'

export function Getproductora () {

    const [productoras,SetProductoras] = useState([])
    const [loader,setloader] = useState(false)
    const [productora,Setproductora] = useState({
        name:'',
        sloga:'',
        description:''
    })


    useEffect(() => {
        listproductora()
    },[])

    const listproductora = async () => {
        setloader(true)
        try{
            const response = await getproductora()
            SetProductoras(response.data)
            setloader(false)    
        }catch(e){
            console.error(e)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            setloader(false)
        }
    }

    const crearproductora = async () => {
        setloader(true)
        try{
            const response = await postproductora(productora)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Guardado',
                showConfirmButton: false,
                timer: 1500
            })
            listproductora()
            clearproductora()
            setloader(false)    
        }catch(e){
            console.error(e)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            setloader(false)
        }
    }
    
    const handleChange = (e) => {
        console.log(e.target.name)
        Setproductora({
            ...productora,
            [e.target.name]:e.target.value
        })
    }

    const clearproductora = () => {
        Setproductora({
            name:'',
            sloga:'',
            description:''
        })
    }
    return(<>
        <Title title='Productoras '/>
        {
            loader && <Spinner  />
        }
        <Table productoras={productoras}/>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo(a) productor</button>
        <Modal productora={productora} change={handleChange} crearproductora={crearproductora}  clearproductora={clearproductora}/>
    </>)
}