import {useState,useEffect,Fragment} from 'react'
import {deletedirector, getdirector, postdirector,putdirector} from '../../services/director/director'
import { Title } from '../ui/title'
import { Modal } from './modal'
import { Table } from './table'
import { Spinner } from '../ui/spinner'
import Swal from 'sweetalert2'

export function Getdirector(){
    
    const [directors,Setdirectors] = useState([])
    const [loader,setloader] = useState(false)
    const [director,Setdirector] = useState({
        name:''
    })

    useEffect(() => {
        listdirector()
    },[])
    
    const listdirector = async () => {
        setloader(true)
        try{
            const {data} = await getdirector() 
            console.log(data)
            Setdirectors(data)
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

    const creardirector = async () => {
        setloader(true)
        try{
            const {data} = await postdirector(director) 
            console.log(data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Guardado',
                showConfirmButton: false,
                timer: 1500
            })
            listdirector()
            cleardirector()
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

    const borrardirector = (e) => {
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
                    const response = await deletedirector(_id) 
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Guardado',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    listdirector()
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

    const editardirector = async (e) => {
      setloader(true)
      try{
          const {data} = await putdirector(e.target.id,director) 
          console.log(data)
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Guardado',
              showConfirmButton: false,
              timer: 1500
          })
          listdirector()
          cleardirector()
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
        Setdirector({
            ...director,
            [e.target.name]:e.target.value
        })
    }

    const cleardirector = () => {
        Setdirector({
            name:''
        })
    }

    return(<>
        <Title title='Directores'/>
        {
            loader && <Spinner />
        }
        <Table 
            directors={directors} 
            borrardirector={borrardirector}
            editardirector={editardirector}
          />
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo director</button>
        <Modal director={director} change={handleChange} creardirector={creardirector } cleardirector={cleardirector} />
    </>)
    
}