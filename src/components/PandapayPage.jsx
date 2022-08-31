import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"

//COMPONENTS
import Forms from "./Forms"

//SVGS
import ZestpayLogo from "./assets/zestpayLogo.svg"
import BackButton from "./assets/backButton.svg"
import PandapayLogo from "./assets/pandapayLogo.svg"
import Mail from "./assets/mail.svg"
import Phone from "./assets/phone.svg"

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
  margin-top: 48px;
`

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
const FormBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 30px;
`

const FormContent = styled.input`
  display: flex;
  width: 400px;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  background-color: transparent;
  align-items: baseline;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
`

const PandapayPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => console.log(data)

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
          <MainContentContainer>
            <MainContentTop>
              <MainContentTopItem>
                <img src={BackButton} alt="" /> Change option
              </MainContentTopItem>
              <MainContentTopItem>
                <img
                  src={PandapayLogo}
                  alt=""
                  style={{ width: "153px", height: "29px" }}
                />
              </MainContentTopItem>
              <MainContentTopItem>
                Pay from your bank account
              </MainContentTopItem>
            </MainContentTop>
            <MainContent>
              <Disclaimer>
                Please fill in the Transfer ID in the Beneficiary field and make
                the transfer from your bank account. Without Transfer ID your
                payment will not be credited.
                <p />
                Example: 2747420 ヤマ ダ タロ
              </Disclaimer>
              <FormBlock>
                Transfer ID
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormContent
                    type="text"
                    {...register("transferId", {
                      required: true,
                      validate: {
                        positiveNumber: (value) => isNaN(parseFloat(value)),
                        lessThanSeven: (value) => parseFloat(value) > 0,
                        moreThanSeven: (value) => parseFloat(value) > 9999999,
                      },
                    })}
                    placeholder="2747420"
                  />
                  {errors.transferId?.type === "positiveNumber" && (
                    <p>Invalid number</p>
                  )}
                  {errors.transferId?.type === "required" && <p>Please fill</p>}

                  <p>{errors.mail?.message}</p>
                </form>
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
          </MainContentContainer>
        </Container>
      </MainContainer>
    </div>
  )
}

export default PandapayPage
