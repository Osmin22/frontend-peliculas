import {axiosconfiguration} from '../../configuration/configuration'

const getdirector = () => {
    return axiosconfiguration.get('/directores/directors?status=true',{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

const postdirector = (data) => {
    return axiosconfiguration.post('/directores/director',data,{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

const putdirector = (_id,data) => {
    return axiosconfiguration.put(`/directores/director?_id=${_id}`,data,{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

const deletedirector = (_id,data) => {
    return axiosconfiguration.delete(`/directores/director?_id=${_id}`,{},{
            headers:{
                'Content-Type':'application/json'
            }
    })
}


export {
    getdirector,
    postdirector,
    putdirector,
    deletedirector
}