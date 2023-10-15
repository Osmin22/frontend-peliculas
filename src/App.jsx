import React from 'react'
import {Footer} from './components/ui/footer'
import { Approuter } from './routers/Approuter'

export function App(){

    return (<div className='container'>
        <Approuter />
        <Footer />
    </div>)
}