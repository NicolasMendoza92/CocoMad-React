import React from 'react'
import { VscSearch } from 'react-icons/vsc'
import { useHistory } from 'react-router';

export const ProductSearch = ({ setSearch, currentPage, setCurrentPage }) => {

    const history = useHistory();

    const filter = (e) => {
        if (currentPage !== 1 || currentPage === 1) {
            setCurrentPage(1)
            e.preventDefault();
            const keyword = e.target.value;
            history.push('/productos');
            setSearch(keyword);
        }

    };
    return (
        <div className="d-flex justify-content-end">
            <form className="search-product mx-2" >
                <div className="input-group mb-3">
                    <button
                        className="search-icon-product"
                        id="basic-addon1" disabled >
                        <VscSearch />
                    </button>
                    <input
                        type="text"
                        className="col-10 search-input-product"
                        placeholder="¿Que Buscas? "
                        aria-describedby="basic-addon1"
                        onChange={filter}
                    />
                </div>
            </form>
        </div>
    )
}
