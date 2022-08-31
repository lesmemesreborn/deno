import React from "react"
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 286px;
  background: #20252a;
  color: #fff;
  text-align: center;
  font-family: "Helvetica";
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 32px;
  margin-top: 80px;
`

const Ref = styled.a`
  color: #24db82;
  text-decoration: none;
`

const Footer = () => {
  return (
    <MainContainer>
      <div>
        zestPay is a registered trading name of PSI-Pay Ltd, company authorised
        and regulated by the <Ref href="#">the Financial Conduct Authority</Ref>{" "}
        of the United Kingdom under the Electronic Money Regulations 2011
        (register reference number 900011) for the issuing of electronic money.
      </div>
      <div>
        zestPay is powered by Trustly, an authorised payment institution under
        Swedish Financial Supervisory Authority (FSA) regulation.
      </div>
      <div>
        <div>© 2022, zestPay. All rights reserved.</div>{" "}
        <Ref href="#">Policies</Ref>
      </div>
    </MainContainer>
  )
}

export default Footer
