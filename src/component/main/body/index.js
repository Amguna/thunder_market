import React from 'react'
import Product from './product';

//styles
import { Body } from './styles';

export default function Component() {

  const DummyProducts = () => {
    return(
      <>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      </>
    )
  }

  return (
    <Body>
      <DummyProducts />
    </Body>
  )
}