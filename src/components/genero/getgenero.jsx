import {useState,useEffect} from 'react'
import {deletegenero, getgenero, postgenero} from '../../services/genero/genero'
import { Title } from '../ui/title'
import { Modal } from './modal'
import { Table } from './table'
import { Spinner } from '../ui/spinner'
import Swal from 'sweetalert2'

export function Getgenero () {
    const [generos,Setgeneros] = useState([])
    const [loader,setloader] = useState(false)
    const [genero,Setgenero] = useState({
        name:'',
        description:''
    })

    useEffect(() => {
        listgenero()
    },[])

    const listgenero = async () => {
        setloader(true)
        try{
            const response = await getgenero() 
            Setgeneros(response.data)
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

    const creargenero = async () => {
        setloader(true)
        try{
            const response = await postgenero(genero) 
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Guardado',
                showConfirmButton: false,
                timer: 1500
            })
            listgenero()
            cleargenero()
            setloader(false)
        }catch(e){
            console.error(e)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error al guardar',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            setloader(false)
        }
    }

    const borrargenero = (e) => {
        console.log(e.target.id)
        const _id = e.target.id
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Borrar?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            reverseButtons: true
          }).then(async (result) => {
            if (result.isConfirmed) {
                try{
                    const response = await deletegenero(_id) 
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Guardado',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    listgenero()
                    setloader(false)
                }catch(e){
                    console.error(e)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error al borrar',
                        footer: '<a href="">Why do I have this issue?</a>'
                      })
                    setloader(false)
                }
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
              
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
              setloader(false)
            }
          })
        setloader(true)
    }

    const handleChange = (e) => {
        console.log(e.target.name)
        Setgenero({
            ...genero,
            [e.target.name]:e.target.value
        })
    }
    
    const cleargenero = () => {
        Setgenero({
            name:'',
            description:''
        })
    }

    return(<>
        <Title title='Generos'/>
        { 
            loader && <Spinner />
        }
        <Table generos={generos} borrargenero={borrargenero} />
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo Genero</button>
        <Modal genero={genero} change={handleChange} creargenero={creargenero} cleargenero={cleargenero} />
    </>)
}