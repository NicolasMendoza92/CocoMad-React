
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CartSideButton } from '../componentes/cartSide/CartSideButton';
import { CardsProducts } from '../componentes/producto/CardsProducts'
import { ProductSearch } from '../componentes/producto/ProductSearch';
import { Sidebar } from '../componentes/sidebarProduct/Sidebar'
import { SliderProducts } from '../componentes/sliderProducts/SliderProducts';


export default function Productos({ products, setProducts, search, setSearch, cart, setCart }) {

  const [showSideCart, setShowSideCart] = useState(false);
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
          <Col className="col-12 col-md-3">
            <Sidebar
              setSelectCategory={setSelectCategory}
              setSelectPrice={setSelectPrice}
              selectCategory={selectCategory}
              selectPrice={selectPrice}
              onselectCat={clearFilterCategory}
              onselectPri={clearFilterPrice} />
          </Col>
          <Col className="col-12 col-md-9 p-0">
            <ProductSearch setSearch={setSearch} />
            <CardsProducts
              products={products}
              setProducts={setProducts}
              selectCategory={selectCategory}
              selectPrice={selectPrice}
              search={search}
              cart={cart}
              setCart={setCart} 
              setShowSideCart={setShowSideCart}/>
          </Col>
        </Row>
        <SliderProducts />
      </Container>
      <CartSideButton
        setCart={setCart}
        cart={cart}
        showSideCart={showSideCart}
        setShowSideCart={setShowSideCart}
        className="position-fixed" />
    </div>
  )
}
