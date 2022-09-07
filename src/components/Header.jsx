import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Dropdown from "./Dropdown"
import { device } from "../device"

//SVG
import Back from "./assets/backButton.svg"
import Language from "./assets/languageArrow.svg"
import ZestpayLogo from "./assets/zestpayLogo.svg"

const Header = () => {
  const [active, setActive] = useState(false)
  return (
    <Container>
      <Top>
        <TopInner>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Cancel>
              <ImgBack src={Back} alt="" /> Cancel
            </Cancel>
          </Link>
          <LogoHeader src={ZestpayLogo} alt="" />
          <LanguageBlock onClick={() => setActive(!active)}>
            <LanguageBlock>
              English <ImgLanguage src={Language} alt="" />
            </LanguageBlock>
            <Dropdown active={active} setActive={setActive} />
          </LanguageBlock>
        </TopInner>
      </Top>
      <TopContent>
        <Logo src={ZestpayLogo} alt="" />
        <HeaderTitle>
          <p>
            <PaymentText>Payment to: </PaymentText>
            MerchantName
          </p>
        </HeaderTitle>
      </TopContent>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding-bottom: 40px;
  flex-direction: column;
  @media ${device.mobile} {
    padding: 0 20px 40px 20px;
  }
  @media ${device.laptop} {
    padding: 0px 0px 40px 0px;
  }
`

const Top = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #cfcfcf;
  color: rgb(0, 0, 0);
  font-family: "Segoe UI";
  font-size: 16px;
  font-weight: 400;
`
const TopInner = styled.div`
  margin: auto;
  max-width: 860px;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  -moz-box-align: center;
  justify-content: space-between;
`

const Cancel = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  -moz-box-align: center;
  align-items: center;
  font-size: 15px;
  line-height: 24px;
  color: rgb(0, 0, 0);
  text-decoration: none;
`

const LanguageBlock = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  -moz-box-align: center;
  align-items: center;
  font-size: 15px;
  line-height: 24px;
  color: rgb(0, 0, 0);
  text-decoration: none;
  cursor: pointer;
`

const ImgBack = styled.img`
  margin-right: 7px;
`

const ImgLanguage = styled.img`
  margin-left: 16px;
`

const Logo = styled.img`
  width: 82px;
  margin-right: auto;
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.laptop} {
    display: block;
  }
`

const LogoHeader = styled.img`
  width: 82px;
  margin-right: auto;
  @media ${device.mobile} {
    display: block;
    margin-left: 40px;
    margin-right: 40px;
  }
  @media ${device.laptop} {
    display: none;
  }
`

const PaymentText = styled.span`
  font-family: "Helvetica";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  @media ${device.mobile} {
    color: #828282;
  }
  @media ${device.laptop} {
    color: #000;
  }
`

const HeaderTitle = styled.p`
  font-family: "Helvetica";
  font-size: 18px;
  line-height: 1.555;
`

const TopContent = styled.div`
  margin: 42px auto 0px auto;
  padding: 0px 20px 0px 20px;
  max-width: 710px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export default Header
