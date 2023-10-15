
import {axiosconfiguration} from '../../configuration/configuration'

const getproductora = () => { 
    return axiosconfiguration.get('/productoras/productoras?status=true',{
        headers:{
            'Content-Type':'application/json'
        }
    })
}

const postproductora = (data) => {
    return axiosconfiguration.post('/productoras/productora',data,{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

const putproductora = (_id,data) => {
    return axiosconfiguration.put(`/productoras/productora?_id=${_id}`,data,{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

const deletegenero = (_id,data) => {
    return axiosconfiguration.delete(`/generos/genero?_id=${_id}`,{},{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

export {
    getproductora,
    postproductora,
    putproductora,
    deletegenero
}
