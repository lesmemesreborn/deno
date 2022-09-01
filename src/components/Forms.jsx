import React from "react"
import styled from "styled-components"
import Copy from "./assets/copy.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  font-size: 18px;
  gap: 32px;
  margin-bottom: 50px;
`

const FormBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FormContent = styled.div`
  display: flex;
  width: 28vw;
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
`

const FormContentBank = styled(FormContent)`
  text-transform: uppercase;
`

const Img = styled.img`
  &:hover,
  &:focus {
    cursor: pointer;
  }
`

const Forms = () => {
  return (
    <Container>
      <FormBlock>
        Bank name{" "}
        <FormContentBank>
          SBI
          <Img src={Copy} alt="" onClick={() => alert("qwe123")} />
        </FormContentBank>
      </FormBlock>
      <FormBlock>
        Branch name{" "}
        <FormContentBank>
          adb barwala
          <Img src={Copy} alt="" onClick={() => alert("qwe123")} />
        </FormContentBank>
      </FormBlock>
      <FormBlock>
        Account type{" "}
        <FormContent>
          Savings Account
          <Img src={Copy} alt="" onClick={() => alert("qwe123")} />
        </FormContent>
      </FormBlock>
      <FormBlock>
        Account number{" "}
        <FormContent>
          3025766
          <Img src={Copy} alt="" onClick={() => alert("qwe123")} />
        </FormContent>
      </FormBlock>
      <FormBlock>
        Account holder{" "}
        <FormContent>
          Testing Name
          <Img src={Copy} alt="" onClick={() => alert("qwe123")} />
        </FormContent>
      </FormBlock>
      <FormBlock>
        Amount{" "}
        <FormContent>
          6000.00 JPY
          <Img src={Copy} alt="" onClick={() => alert("qwe123")} />
        </FormContent>
      </FormBlock>
    </Container>
  )
}

export default Forms
