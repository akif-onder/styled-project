import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Logo, Nav, Image } from "./styles/Header.styled";
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png"></Logo>
          <div>
            <Button color="#a62440">Apply Courses</Button>
            <Button bg="#a62440">Talk To Advisers</Button>
          </div>
        </Nav>
        <Flex>
          <div>
            <h1>The IT Career of Your Dreams Starts Here!</h1>
            <p>
              Clarusway is a leading international software Bootcamp. Join a
              micro class online with other trainees and learn coding skills
              with a highly-skilled instructor.
            </p>
            <Button bg="#a62440">Start Your New Career</Button>
          </div>
          <Image src="./images/hero.jpg"></Image>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
