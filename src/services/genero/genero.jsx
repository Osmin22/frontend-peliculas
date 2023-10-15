
import {axiosconfiguration} from '../../configuration/configuration'

 
const getgenero= () => {
    return axiosconfiguration.get('/generos/generos?status=true',{
        headers:{
                'Content-Type':'application/json'
            }
    })
}

const postgenero = (data) => {
    return axiosconfiguration.post('/generos/genero',data,{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

const putgenero = (_id,data) => {
    return axiosconfiguration.put(`/generos/genero?_id=${_id}`,data,{
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
    getgenero,
    postgenero,
    putgenero,
    deletegenero
}

   