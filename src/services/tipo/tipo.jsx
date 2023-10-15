import {axiosconfiguration} from '../../configuration/configuration'


const gettipo = () => { 
    return axiosconfiguration.get('/tipys/tipos?name=NOVELAS',{
        headers:{
            'Content-Type':'application/json'
        }
    })
}


const posttipo = (data) => {
    return axiosconfiguration.post('/tipys/tipo',data,{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

const puttipo = (_id,data) => {
    return axiosconfiguration.put(`/tipys/tipo?_id=${_id}`,data,{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

const deletetipo = (_id,data) => {
    return axiosconfiguration.delete(`/tipys/tipo?_id=${_id}`,{},{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

export {
    gettipo,
    posttipo,
    puttipo,
    deletetipo
}
  