import React from 'react'
import { Container } from 'react-bootstrap'
import { VscSearch } from 'react-icons/vsc'

export const NavbarSearch = ({filter, buscarSubmit}) => {
    return (
        <Container className="py-2 d-flex justify-content-center ">
        <form className="search-form" onSubmit={buscarSubmit} >
            <div className="input-group mb-3 border-0">
                <button
                    className="search-icon"
                    id="basic-addon1" 
                    type='submit'>
                    <VscSearch />
                </button>
                <input
                    type="text"
                    className="col-11 search-input"
                    placeholder="¿Que Buscas? "
                    aria-describedby="basic-addon1"
                    onChange={filter}
                />
            </div>
        </form>
    </Container>
    )
}

