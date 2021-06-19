import BodyRouter from './route/BodyRouter'
import HeaderRouter from './route/HeaderRouter'
import NavRouter from './route/NavRouter'
import FooterRouter from './route/FooterRouter'

//styles
import { Container, HeaderContainer, BodyContainer, FooterContainer, NavContainer } from './styles';

function App() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderRouter />
      </HeaderContainer>
      


      <NavContainer>
        <NavRouter />
      </NavContainer>

      <BodyContainer>
        <BodyRouter />
      </BodyContainer>
      


      <FooterContainer>
        <FooterRouter />
      </FooterContainer>
      
    </Container>
  );
}

export default App;
