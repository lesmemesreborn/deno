import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Copy from "./assets/copy.svg"
import { device } from "../device"
import Copied from "./Copied"

const Forms = () => {
  const [active, setActive] = useState(false)

  return (
    <Container>
      <FormBlock>
        Bank name{" "}
        <FormContentBank>
          SBI
          <Img src={Copy} alt="" onClick={() => setActive(true)} />
        </FormContentBank>
      </FormBlock>
      <FormBlock>
        Branch name{" "}
        <FormContentBank>
          adb barwala
          <Img src={Copy} alt="" onClick={() => setActive(true)} />
        </FormContentBank>
      </FormBlock>
      <FormBlock>
        Account type{" "}
        <FormContent>
          Savings Account
          <Img src={Copy} alt="" onClick={() => setActive(true)} />
        </FormContent>
      </FormBlock>
      <FormBlock>
        Account number
        <FormContent>
          3025766
          <Img src={Copy} alt="" onClick={() => setActive(true)} />
        </FormContent>
      </FormBlock>
      <FormBlock>
        Account holder{" "}
        <FormContent>
          Testing Name
          <Img src={Copy} alt="" onClick={() => setActive(true)} />
        </FormContent>
      </FormBlock>
      <FormBlock>
        Amount{" "}
        <FormContent>
          6000.00 JPY
          <Img src={Copy} alt="" onClick={() => setActive(true)} />
        </FormContent>
      </FormBlock>
      <Copied active={active} setActive={setActive} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  font-size: 18px;
  gap: 32px;
  margin-bottom: 50px;
  @media ${device.mobile} {
    width: 100%;

    padding-top: 16px;
  }
  @media ${device.laptop} {
    width: 100%;
    border: none;
    padding-top: 0;
  }
`

const FormBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 8px;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`

const FormContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-family: "Segoe UI", "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  background-color: transparent;
  color: #828282;
  align-items: baseline;
  @media ${device.mobile} {
    align-items: flex-start;
    width: 100%;
    max-width: 400px;
    gap: 8px;
    padding-left: 0px;
  }
  @media ${device.laptop} {
    flex-direction: row;
    width: 100%;
    max-width: 400px;
    padding-left: 12px;
  }
`

const FormContentBank = styled(FormContent)`
  text-transform: uppercase;
`

const Img = styled.img`
  &:hover,
  &:focus {
    cursor: pointer;
  }
  @media ${device.mobile} {
    padding-right: 23px;
  }
  @media ${device.laptop} {
    padding-right: 12px;
  }
`

export default Forms
