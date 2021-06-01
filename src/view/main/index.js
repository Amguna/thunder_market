import React from 'react'

import {
  Header,
  Nav,
  NavRightBar,
  Body,
  Footer,
} from './styles';

//components
import HeaderComponents from '../../component/main/header';

export default function MainPage() {
  return (
    <div>
      <Header>
        <HeaderComponents />
      </Header>


      <Nav>
        <div>
          navigator
        </div>
        <NavRightBar />
      </Nav>


      <Body>
        body
      </Body>


      <Footer>
        footer
      </Footer>
    </div>
  )
}
