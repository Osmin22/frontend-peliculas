import {axiosconfiguration} from '../../configuration/configuration'

const getmedia = () => {
    return axiosconfiguration.get('/medias/media',{
            headers:{
                'Content-Type':'application/json'
            }
        })
}

const postmedia = (data) => {
    return axiosconfiguration.post('/medias/media',data,{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

const putmedia = (_id,data) => {
    return axiosconfiguration.put('/medias/media',data,{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

const deletemedia = (_id,data) => {
    return axiosconfiguration.delete('/medias/media',{},{
            headers:{
                'Content-Type':'application/json'
            }
    })
}

export {
    getmedia,
    postmedia,
    putmedia,
    deletemedia
}