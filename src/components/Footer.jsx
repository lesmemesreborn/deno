import React from "react"
import styled from "styled-components"
import { device } from "../device"

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <p>
          zestPay is a registered trading name of PSI-Pay Ltd, company
          authorised and regulated by the{" "}
          <Ref href="#">the Financial Conduct Authority</Ref> of the United
          Kingdom under the Electronic Money Regulations 2011 (register
          reference number 900011) for the issuing of electronic money.
        </p>
        <p>
          zestPay is powered by Trustly, an authorised payment institution under
          Swedish Financial Supervisory Authority (FSA) regulation.
        </p>
        <p>
          © 2022, zestPay. All rights reserved.
          <br />
          <Ref href="#">Policies</Ref>
        </p>
      </Container>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  color: #fff;
  font-family: "Helvetica";
  font-size: 14px;
  line-height: 1.2857;
  text-align: center;
  background: #20252a;
  width: 100%;

  @media ${device.mobile} {
    padding: 80px 0px;
  }
`

const Container = styled.div`
  max-width: 100%;
  padding: 80px 50px;
  margin: 0 auto;
  width: 1320px;
  @media ${device.mobile} {
    padding: 0 50px;
  }
`

const Ref = styled.a`
  color: #24db82;
  text-decoration: none;
`
export default Footer
