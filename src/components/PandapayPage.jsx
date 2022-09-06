import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { device } from "../device"

//COMPONENTS
import Forms from "./Forms"

//SVGS
import ZestpayLogo from "./assets/zestpayLogo.svg"
import BackButton from "./assets/backButton.svg"
import PandapayLogo from "./assets/pandapayLogo.svg"
import Mail from "./assets/mail.svg"
import Phone from "./assets/phone.svg"
import Copy from "./assets/copy.svg"

const PandapayPage = () => {
  const [id, setId] = useState("")
  const [idDirty, setIdDirty] = useState(false)
  const [idError, setIdError] = useState("Invalid number")

  const idHandler = (e) => {
    setId(e.target.value)
    const reg = new RegExp("^[0-9]+$")
    if (!reg.test(String(e.target.value))) {
      setIdError("Invalid Number")
    } else setIdError("")
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "id":
        setIdDirty(true)
        break
    }
  }

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

            <PandaImg src={PandapayLogo} alt="" />

            <PayFrom>Pay from your bank account</PayFrom>

            <MainContent>
              <Disclaimer>
                Please fill in the Transfer ID in the Beneficiary field and make
                the transfer from your bank account. Without Transfer ID your
                payment will not be credited.
                <p />
                Example: 2747420 ヤマ ダ タロ
              </Disclaimer>
              <FormBlock>
                <TransferIdTitle>Transfer ID</TransferIdTitle>
                <Form>
                  <form>
                    {id.length === 0 && <RequiredPlate>Required</RequiredPlate>}
                    {idDirty && idError && id.length > 0 && (
                      <InvalidPlate>{idError}</InvalidPlate>
                    )}
                    {idDirty && !idError && id.length < 7 && (
                      <RequiredPlate>Please Fill</RequiredPlate>
                    )}
                    {!idError && id.length >= 7 && (
                      <RequiredPlate>ok</RequiredPlate>
                    )}

                    <FormContent
                      onBlur={(e) => blurHandler(e)}
                      value={id}
                      name="id"
                      type="text"
                      placeholder="2472423"
                      onChange={(e) => idHandler(e)}
                      minlength="7"
                      maxlength="7"
                      pattern="^(0|[1-9][0-9]*)$"
                      autocomplete="off"
                    ></FormContent>
                  </form>
                </Form>
              </FormBlock>
              <Forms />
              <CloseBlock>
                <CloseButton>Close</CloseButton>
              </CloseBlock>
              <FooterContent>
                <div>Payment inquiries:</div>
                <FooterContentGreenText href="mailto:support@global-feed.com">
                  <Img src={Mail} alt="" />
                  <span>support@global-feed.com</span>
                </FooterContentGreenText>
                <FooterContentGreenTextPhone href="tel:03–6332–6639">
                  <Img src={Phone} alt="" /> 03–6332–6639
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
  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
  @media ${device.laptop} {
    flex-direction: row;
    align-items: center;
  }
`

const PandaImg = styled.img`
  display: block;
  width: 153px;
  margin-right: 10px;
  @media ${device.mobile} {
    padding-top: 24px;
  }
  @media ${device.laptop} {
    padding-top: 0px;
  }
`
const Form = styled.div`
  width: 100%;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`

const PayFrom = styled.p`
  display: block;
  max-width: 200px;
  font-size: 15px;
  @media ${device.mobile} {
    padding-top: 0px;
  }
  @media ${device.laptop} {
    padding-top: 0px;
  }
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
  @media ${device.mobile} {
    width: 100%;
    border-bottom: 1px solid #cfcfcf;
  }
  @media ${device.laptop} {
    border-bottom: none;
    width: inherit;
  }
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
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  @media ${device.laptop} {
    flex-direction: row;
    align-items: center;
  }
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
const FormBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 30px;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`

const FormContent = styled.input`
  display: flex;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  width: 27.8vw;
  :invalid {
    border-bottom: 1px solid #ff9900;
  }
  :valid {
    border-bottom: 1px solid #24db82;
  }
  @media ${device.mobile} {
    align-items: flex-start;
    width: 100%;
    gap: 8px;
  }
  @media ${device.laptop} {
    flex-direction: row;
    width: 27.8vw;
  }
`

const RequiredPlate = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: justify;
  height: 24px;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #24db82;
  background: rgba(0, 0, 0, 0.04);
  max-width: 75px;
`

const InvalidPlate = styled(RequiredPlate)`
  color: #ff9900;
`

const TransferIdTitle = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: -8px;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`

export default PandapayPage
