import Button from "./styles/Button.styled";
import StyledHeader from "./styles/Header.styled";
const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Button color="#a62440">Apply Courses</Button>
        <Button bg="#a62440">Talk To Advisers</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
