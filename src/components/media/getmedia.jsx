import {useState,useEffect,Fragment} from 'react'
import {getmedia, postmedia} from '../../services/media/media'
import { Title } from '../ui/title'
import { Modal } from './modal'
import { Table } from './table'
import { Spinner } from '../ui/spinner'
import Swal from 'sweetalert2'

export function Getmedia() {
    
    const [medias,Setmedias] = useState([])
    const [loader,setloader] = useState(false)
    const [media,Setmedia] = useState({
        serial:"",
        sinopsis:"",
        url:"",
        image:"",
        anoestreno:"",
        title:"",
        tipogenero:{
            _id:""
        },
        tipodirector:{
            _id:""
        },
        tipoproductora:{
            _id:""
        },
        tipo:{
            _id:""
        }
    })

    useEffect(() => {
        listmedia()
    },[])

    const listmedia = async () => {
        setloader(true)
        try{
            const response = await getmedia() 
            Setmedias(response.data)
            console.log(response.data)
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
    
    const crearmedia = async () => {
        setloader(true)
        try{
            const response = await postmedia()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Guardado',
                showConfirmButton: false,
                timer: 1500
              })
            console.log(response.data)
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
        Setmedia({
            ...media,
            [e.target.name]:e.target.value
        })
    }

    return(<>
        <Title title='Medias'/>
        {
            loader && <Spinner />
        }
        <Table medias={medias}/>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nueva pelicula</button>
        <Modal media={media} change={handleChange}/>
    </>)
}