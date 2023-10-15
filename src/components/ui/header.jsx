import React  from 'react'
import { NavLink } from 'react-router-dom'

export function Header(){
    return(<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use >Logo</use></svg>
            <span class="fs-4">Peliculas</span>
        </a>
        <ul class="nav nav-pills">
            <li className="nav-item">
                <NavLink to='/' tabIndex={1} className="nav-link" >
                    Generos
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/directores' tabIndex={2} className="nav-link" >
                    Directores
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/productoras' tabIndex={3} className="nav-link" >
                    Productoras
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/tipos' tabIndex={4} className="nav-link" >
                    tipos
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/medias' tabIndex={5} className="nav-link" >
                    Peliculas y series
                </NavLink>
            </li>
        </ul>
  </header>)
}