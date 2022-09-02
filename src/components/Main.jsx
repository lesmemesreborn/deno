import React from "react"
import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

//COMPONENTS
import Header from "./Header"
import Footer from "./Footer"
import Forms from "./Forms"

//SVGS
import ZestpayLogo from "./assets/zestpayLogo.svg"
import PandapayLogo from "./assets/pandapayLogo.svg"
import BackButton from "./assets/backButton.svg"
import WirepayLogo from "./assets/wirepayLogo.svg"
import Mail from "./assets/mail.svg"
import Phone from "./assets/phone.svg"
import Forward from "./assets/forwardArrow.svg"

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 71px;
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
  margin-bottom: 80px;
`

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #cfcfcf;
  border-radius: 16px;
  margin-top: 32px;
`

const MainContentItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Segoe UI", "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  flex-wrap: wrap;
  padding: 32px 5%;
  color: #000000;

  &:hover,
  &:focus {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.04);
  }
`
const Img = styled.img`
  height: 30px;
  width: 150px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
`

const Hr = styled.hr`
  border-top: #cfcfcf;
  width: 90%;
  margin: 0;
  align-self: center;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = () => {
  return (
    <div>
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
          <Title>Select a payment option:</Title>
          <MainContentContainer>
            <Link to="/pandapay" style={{ textDecoration: "none" }}>
              <MainContentItem>
                <Img src={PandapayLogo} />
                <div>Pay from your bank account</div>
                <img src={Forward} alt="" />
              </MainContentItem>
            </Link>
            <Hr />
            <Link to="/wirepay" style={{ textDecoration: "none" }}>
              <MainContentItem>
                <Img src={WirepayLogo} />
                <div>
                  Pay from your bank account, also known as direct payment
                </div>
                <img src={Forward} alt="" />
              </MainContentItem>
            </Link>
          </MainContentContainer>
        </Container>
      </MainContainer>
    </div>
  )
}

export default Main
