import React from 'react'
import { Container } from 'react-bootstrap'
import { VscSearch } from 'react-icons/vsc'

export const NavbarSearch = ({filter}) => {
    return (
        <Container className="py-2 d-flex justify-content-center ">
        <form className="search-form" >
            <div className="input-group mb-3 border-0">
                <button
                    className="search-icon"
                    id="basic-addon1" >
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

