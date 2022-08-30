import React from "react"
import styled from "styled-components"

//COMPONENTS
import Header from "./Header"
import Footer from "./Footer"

//SVGS
import ZestpayLogo from "./assets/zestpayLogo.svg"
import BackButton from "./assets/backButton.svg"
import WirepayLogo from "./assets/wirepayLogo.svg"

const MainContainer = styled.div`
  display: flex;
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

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cfcfcf;
  border-radius: 16px;
  padding: 32px 4.5%;
  margin-top: 48px;
`

const MainContentItem = styled.div`
  margin-bottom: 32px;
  width: 33%;
`

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
          <MainContent>
            <MainContentItem>
              <img src={BackButton} /> Change option
            </MainContentItem>
            <MainContentItem>
              <img
                src={WirepayLogo}
                alt=""
                style={{ width: "153px", height: "29px" }}
              />
            </MainContentItem>
            <MainContentItem>
              Pay from your bank account, aslo known as direct payment
            </MainContentItem>
          </MainContent>
          <div>Main Content</div>
          <div>Button</div>
          <div>footer content</div>
        </Container>
      </MainContainer>
      {/* <Footer /> */}
    </div>
  )
}

export default PaymentPage
