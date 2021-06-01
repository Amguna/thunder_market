import Router from './route/BodyRouter'

import {
  Header,
  Nav,
  NavRightBar,
  Body,
  Footer,
} from './styles';

//components
import HeaderComponent from './component/main/header'

function App() {
  return (
    <div>
      <Header>
        <HeaderComponent />
      </Header>


      <Nav>
        <div>
          navigator
        </div>
        <NavRightBar />
      </Nav>


      <Body>
        <Router />
      </Body>


      <Footer>
        footer
      </Footer>
    </div>
  );
}

export default App;
