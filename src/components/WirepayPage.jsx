import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

//COMPONENTS
import Forms from "./Forms"

//SVGS
import ZestpayLogo from "./assets/zestpayLogo.svg"
import BackButton from "./assets/backButton.svg"
import WirepayLogo from "./assets/wirepayLogo.svg"
import Mail from "./assets/mail.svg"
import Phone from "./assets/phone.svg"

const WirepayPage = () => {
  return (
    <div>
      <MainContainer>
        <Container>
          <Header>
            <MainContentTopItem>
              <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
                <img src={BackButton} alt="" /> Change option
              </Link>
            </MainContentTopItem>

            <WireImg src={WirepayLogo} alt="" />

            <PayFrom>
              Pay from your bank account, aslo known as direct payment
            </PayFrom>

            <MainContent>
              <Disclaimer>
                Please make the transfer to below details from your bank
                account. Make sure that all entered details are correct
              </Disclaimer>
              <Forms />
              <CloseBlock>
                <CloseButton>Close</CloseButton>
              </CloseBlock>
              <FooterContent>
                <div>Payment inquiries:</div>
                <FooterContentGreenText href="mailto:suppor@ovspay.jp">
                  <Img src={Mail} alt="" />
                  <span>suppor@ovspay.jp</span>
                </FooterContentGreenText>
                <FooterContentGreenTextPhone href="tel:03–6380–8113">
                  <Img src={Phone} alt="" /> 03–6380–8113
                </FooterContentGreenTextPhone>
              </FooterContent>
            </MainContent>
          </Header>
        </Container>
      </MainContainer>
    </div>
  )
}

const MainContainer = styled.div`
  display: flex;
  width: 1320px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto 160px;
  justify-content: center;
  font-size: 15px;
`
const Container = styled.div`
  width: 696px;
  max-width: 100%;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(207, 207, 207);
  border-radius: 16px;
  padding: 0px 32px;
  margin: 5px auto 0px;
`

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

const MainContentTopItem = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  vertical-align: top;
  font-size: 15px;
  line-height: 24px;
  color: rgb(0, 0, 0);
  text-decoration: none;
  padding: 32px 0px;
`

const WireImg = styled.img`
  display: block;
  width: 153px;
  margin-right: 10px;
`

const PayFrom = styled.p`
  display: block;
  max-width: 200px;
  font-size: 15px;
`

const MainContentTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #cfcfcf;
`

const Disclaimer = styled.div`
  margin-top: 16px;
  text-align: left;
  margin-bottom: 54px;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 8%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
`

const Img = styled.img`
  display: flex;
  margin-right: 12px;
  align-items: center;
`

const FooterContentGreenText = styled.a`
  display: flex;
  font-weight: 600;
  color: #24db82;
  text-decoration: none;
  align-items: center;
`

const FooterContentGreenTextPhone = styled(FooterContentGreenText)`
  text-decoration-line: underline;
`

const CloseBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`

const CloseButton = styled.button`
  background: #24db82;
  border-radius: 8px;
  width: 136px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 50px;
`

export default WirepayPage
