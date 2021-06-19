import React, { useEffect, useState } from 'react'
import Product from './product';
import Banner from './banner';

//styles
import { Body, ProductsContainer } from './styles';

export default function Component() {

  const [ dummyProducts, setDummyProducts ] = useState([]);

  useEffect(() => {
    const count = 100;
    setDummyProducts(() => {
      let ret = [];
      for(let i = 0; i < count; i++){
        ret.push(<Product key={i} index={i} />)
      }
      return ret;
    })
  },[])

  const DummyProducts = ({title}) => {
    return(
      <>
        <div>
          {title}
        </div>
        <ProductsContainer>
          {dummyProducts.map(c => c)}
        </ProductsContainer>
      </>
    )
  }

  return (
    <Body>
      <Banner />
      <DummyProducts title="오늘의 상품 추천" />
    </Body>
  )
}