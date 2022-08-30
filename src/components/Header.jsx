import React from "react"
import styled from "styled-components"

//SVG
import Back from "./assets/backButton.svg"
import Language from "./assets/languageArrow.svg"

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20%;
  padding-right: 20%;
  width: 100vw;
  height: 72px;

  /* White */
  background: #ffffff; ;
`
const HeaderItem = styled.div`
  font-size: 15px;
`

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderItem>
          <img src={Back} alt="" /> Cancel
        </HeaderItem>
        <HeaderItem>
          English <img src={Language} alt="" />
        </HeaderItem>
      </HeaderContainer>
    </Container>
  )
}

export default Header
