import React from 'react'
import { 
  Container,
  Thumbnail,
  TitleContainer,
  ProductInfoContainer,
  PriceTag,
  TimeTag,
} from './styles'

export default function Product({index}) {
  return (
    <Container index={index} >
      <Thumbnail 
        src='https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE'
      />
      <TitleContainer>
        물건 이름
      </TitleContainer>
      <ProductInfoContainer>
        <PriceTag>
          15,000,000원
        </PriceTag>
        <TimeTag>
          3주 전
        </TimeTag>
      </ProductInfoContainer>
    </Container>
  )
}
