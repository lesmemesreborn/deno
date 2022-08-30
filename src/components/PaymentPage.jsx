import React from "react"
import styled from "styled-components"

//COMPONENTS
import Header from "./Header"
import Footer from "./Footer"

//SVGS
import ZestpayLogo from "./assets/zestpayLogo.svg"
import BackButton from "./assets/backButton.svg"
import WirepayLogo from "./assets/wirepayLogo.svg"
import Mail from './assets/mail.svg'
import Phone from './assets/phone.svg'

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  border-top: 1px solid #cfcfcf;
  justify-content: center;
  font-size: 15px;
`
const Container = styled.div`
  display: flex;
  width: 48vw;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
`

const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  align-items: center;
`

const MainContentContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #cfcfcf;
border-radius: 16px;
padding: 32px 4.5%;
margin-top: 48px;`

const MainContentTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const MainContentTopItem = styled.div`
  margin-bottom: 32px;
  width: 33%;
`

const MainContent = styled.div`
display: flex;
flex-direction: column;
border-top: 1px solid #cfcfcf;`

const Disclaimer = styled.div`
margin-top: 16px;
text-align: left;`

const FooterContent = styled.div`
display: flex;
flex-direction: row;
padding: 0 8%;
justify-content: space-between;
align-items: center;`

const FooterContentGreenText = styled.div`
font-weight: 600;
color: #24DB82`

const FooterContentGreenTextPhone = styled(FooterContentGreenText)`
text-decoration-line: underline;`

const CloseBlock = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
`

const CloseButton = styled.button`
background: #24DB82;
border-radius: 8px; 
width: 136px;
height: 56px;
font-weight: 500;
font-size: 16px;`

const FooterBlock = styled.div`
display: flex;
align-self: flex-end`

const PaymentPage = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <Container>
          <TopContent>
            <img
              src={ZestpayLogo}
              alt=""
              style={{ width: "82px", height: "56px" }}
            />
            <div>Payment to: MerchantName</div>
          </TopContent>
          <MainContentContainer>
          <MainContentTop>
            <MainContentTopItem>
              <img src={BackButton} /> Change option
            </MainContentTopItem>
            <MainContentTopItem>
              <img
                src={WirepayLogo}
                alt=""
                style={{ width: "153px", height: "29px" }}
              />
            </MainContentTopItem>
            <MainContentTopItem>
              Pay from your bank account, aslo known as direct payment
            </MainContentTopItem>
          </MainContentTop>
          <MainContent>
          <Disclaimer>Please make the transfer to below details from your bank account. Make sure that all entered details are correct</Disclaimer>
          <div>Формы</div>
          <CloseBlock>
            <CloseButton>Close</CloseButton>
          </CloseBlock>
          <FooterContent>
            <div>Payment inquiries:</div>
            <FooterContentGreenText>
              <div><img src={Mail} alt="" />    suppor@ovspay.jp</div>
            </FooterContentGreenText>
            <FooterContentGreenTextPhone>
              <div><img src={Phone} alt="" />    03–6380–8113</div>
            </FooterContentGreenTextPhone>
          </FooterContent>
          </MainContent>
          </MainContentContainer>
        </Container>
      </MainContainer>
      <Footer />
    </div>
  )
}

export default PaymentPage
