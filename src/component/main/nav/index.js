import React from 'react'

//styles
import { Nav } from './styles';

//components
import NavRightBar from './NavRightBar';

export default function Component() {
  return (
    <Nav>
      <div>
        search, categories, etc..
      </div>
      <NavRightBar />
    </Nav>
  )
}