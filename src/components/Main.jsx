import React from "react"
import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"
import { device } from "../device"

//SVGS
import ZestpayLogo from "./assets/zestpayLogo.svg"
import PandapayLogo from "./assets/pandapayLogo.svg"
import BackButton from "./assets/backButton.svg"
import WirepayLogo from "./assets/wirepayLogo.svg"
import Mail from "./assets/mail.svg"
import Phone from "./assets/phone.svg"
import Forward from "./assets/forwardArrow.svg"

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Select a payment option:</Title>
        <PayList>
          <Link to="/pandapay" style={{ textDecoration: "none" }}>
            <MainContentItem>
              <PandaImg src={PandapayLogo} />
              <DescText>Pay from your bank account</DescText>
              <img src={Forward} alt="" />
            </MainContentItem>
          </Link>
          <Hr />
          <Link to="/wirepay" style={{ textDecoration: "none" }}>
            <MainContentItem>
              <WireImg src={WirepayLogo} />
              <DescText>
                Pay from your bank account, also known as direct payment
              </DescText>
              <ForwardBlock>
                <img src={Forward} alt="" />
              </ForwardBlock>
            </MainContentItem>
          </Link>
        </PayList>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  @media ${device.mobile} {
    padding-top: 5px;
  }
  @media ${device.laptop} {
    padding-top: 40px;
  }
`
const Container = styled.div`
  width: 1320px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`

const MainContentItem = styled.li`
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: justify;
  justify-content: space-between;
  text-decoration: none;
  transition: background-color 0.3s ease 0s;
  color: #000;
  line-height: 1.6;

  &:hover,
  &:focus {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.04);
  }
`
const PandaImg = styled.img`
  height: 31px;
  width: 153px;
`
const WireImg = styled.img`
  height: 31px;
  width: 163px;
`

const ForwardBlock = styled.span`
  width: 6px;
  height: 10px;
  top: 50%;
  left: 50%;
  display: block;
  background: rgba(0, 0, 0, 0) url("./images/icons/angle-right.svg") no-repeat
    scroll center center / cover;
  margin: -5px 0px 0px -3px;
`

const Title = styled.h2`
  text-align: center;
  margin: 0px 0px 32px;
  font-family: "Helvetica";
  font-weight: 700;
  font-size: 36px;
  line-height: 1.333;

  @media ${device.mobile} {
    font-size: 24px;
    margin: 0px 0px 20px;
  }
`

const Hr = styled.div`
  margin: 0px 32px;
  display: block;
  background: rgb(207, 207, 207) none repeat scroll 0% 0%;
  height: 1px;
  width: auto;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`

const DescText = styled.div`
  width: 200px;
  font-size: 15px;
`

const PayList = styled.ul`
  padding: 0px;
  margin: auto;
  list-style: none;
  width: 694px;
  max-width: 100%;
  border: 1px solid #cfcfcf;
  border-radius: 16px;
`

export default Main
