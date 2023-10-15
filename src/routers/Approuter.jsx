import React from 'react'
import {Header} from '../components/ui/header'
import {Routes,Route} from 'react-router-dom'
import {Getgenero} from '../components/genero/getgenero'
import {Getdirector} from '../components/director/getdirector'
import {Getproductora} from '../components/productora/getproductora'
import {Gettipo} from '../components/tipo/gettipo'
import {Getmedia} from '../components/media/getmedia'
import { Error } from '../components/ui/error'

export function Approuter(){
    return(<>
        <Header />
        <Routes >
            <Route path='/' element={<Getgenero />} />
            <Route path='/directores' element={<Getdirector />} />
            <Route path='/productoras' element={<Getproductora />} />
            <Route path='/tipos' element={<Gettipo />} />
            <Route path='/medias' element={<Getmedia />} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </>)
}