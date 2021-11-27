
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardsProducts } from '../componentes/producto/CardsProducts'
import { Sidebar } from '../componentes/sidebarProduct/Sidebar'
import { SliderProducts } from '../componentes/sliderProducts/SliderProducts';


export default function Productos({ products, setProducts, serch, cart, setCart }) {

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
            <CardsProducts
              products={products}
              setProducts={setProducts}
              selectCategory={selectCategory}
              selectPrice={selectPrice}
              serch={serch}
              cart={cart}
              setCart={setCart} />
          </Col>
        </Row>
        <SliderProducts />
      </Container>


    </div>
  )
}
