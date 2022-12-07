
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CartSideButton } from '../componentes/cartSide/CartSideButton';
import { CardsProducts } from '../componentes/producto/CardsProducts'
import { ProductsBoxs } from '../componentes/producto/ProductsBoxs';
import { ProductSearch } from '../componentes/producto/ProductSearch';
import { Sidebar } from '../componentes/sidebarProduct/Sidebar'


export default function Productos({ products, setProducts, search, setSearch, cart, setCart, setShowSideCart, showSideCart}) {

  const [currentPage, setCurrentPage] = useState(1);
  const [selectCategory, setSelectCategory] = useState('');
  const [selectPrice, setSelectPrice] = useState('');

  const clearFilterCategory = (value) => {
    setSelectCategory(value);
  }

  const clearFilterPrice = (value) => {
    setSelectPrice(value);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col className="col-12 col-md-6">
          <Sidebar
              setSelectCategory={setSelectCategory}
              setSelectPrice={setSelectPrice}
              selectCategory={selectCategory}
              selectPrice={selectPrice}
              onselectCat={clearFilterCategory}
              onselectPri={clearFilterPrice} 
              setSearch={setSearch}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage} />             
          </Col>
          <Col className='col-12 col-md-6'>
          <ProductSearch setSearch={setSearch} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </Col>
        </Row>
      </Container>
      <div className="m-3">
            <CardsProducts
              products={products}
              setProducts={setProducts}
              selectCategory={selectCategory}
              selectPrice={selectPrice}
              search={search}
              cart={cart}
              setCart={setCart}
              setShowSideCart={setShowSideCart} 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}/>
          </div >
      <ProductsBoxs cart={cart} setCart={setCart}/>
      <CartSideButton
        setCart={setCart}
        cart={cart}
        showSideCart={showSideCart}
        setShowSideCart={setShowSideCart}
        className="position-fixed" />
    </div>
  )
}
