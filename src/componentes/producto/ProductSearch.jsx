import React from 'react'
import { VscSearch } from 'react-icons/vsc'
import { useHistory } from 'react-router';

export const ProductSearch = ({ setSearch }) => {

    const history = useHistory();

    const filter = (e) => {
        e.preventDefault();
        const keyword = e.target.value;
        history.push('/productos');
        setSearch(keyword);
    };
    return (
        <div className="d-flex justify-content-end">
            <form className="search-product mx-2" >
                <div className="input-group mb-3">
                    <button
                        className="search-icon-product"
                        id="basic-addon1" >
                        <VscSearch />
                    </button>
                    <input
                        type="text"
                        className="col-11 search-input-product"
                        placeholder="¿Que Buscas? "
                        aria-describedby="basic-addon1"
                        onChange={filter}
                    />
                </div>
            </form>
        </div>
    )
}
