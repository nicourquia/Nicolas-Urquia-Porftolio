import styled from 'styled-components';

const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

const Title = styled.h1`
    font-size: 40px;
    color: #ffff7b;
`

const ButtonsNavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 22%;
`

const NavButton = styled.button`
    font-size: 18px;
    padding: 10px;
    background-color: #cacaca;
    border-radius: 5px;
    border: outset 4px #dbdbdb;
    box-shadow: 3px 3px 1px 3px #616161;
`

const Navbar = () => {
    return(
        <NavContainer>
            <Title>Nico Urquia</Title>
            <ButtonsNavContainer>
                <NavButton>About me</NavButton>
                <NavButton>My Projects</NavButton>
                <NavButton>Contact me</NavButton>
            </ButtonsNavContainer>
        </NavContainer>
    )
}

export default Navbar;