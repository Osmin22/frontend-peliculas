import {useState,useEffect} from 'react'
import {gettipo, posttipo} from '../../services/tipo/tipo'
import { Title } from '../ui/title'
import { Modal } from './modal'
import { Table } from './table'
import { Spinner } from '../ui/spinner'
import Swal from 'sweetalert2'

export function Gettipo () {

    const [tipos,Settipos] = useState([])
    const [loader,setloader] = useState(false)
    const [tipo,Settipo] = useState({
        name:'',
        description:''
    })

    useEffect(() => {
        listtipo()
    },[])

    const listtipo = async () => {
        setloader(true)
        try{
            const response = await gettipo()
            Settipos(response.data)
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


    const creartipo = async () => {
        setloader(true)
        try{
            const response = await posttipo(tipo)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Guardado',
                showConfirmButton: false,
                timer: 1500
            })
            listtipo()
            cleartipo()
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
        Settipo({
            ...tipo,
            [e.target.name]:e.target.value
        })
    }

    const cleartipo = () => {
        Settipo({
            name:'',
            description:''
        })
    }
    
    return(<>
        <Title title='Tipos'/>
        {
            loader && <Spinner />
        }
        <Table tipos={tipos}/>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo tipo</button>
        <Modal tipo={tipo} change={handleChange} creartipo={creartipo} cleartipo={cleartipo}/>
    </>) 
}