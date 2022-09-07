import React, { useState } from "react"
import styled from "styled-components"
import { device } from "../device"

const Dropdown = ({ active, setActive }) => {
  const handleOnClick = (item) => {}

  const items = [
    {
      id: 1,
      value: "English",
    },
    {
      id: 2,
      value: "Bulgarian",
    },
    {
      id: 3,
      value: "Croatian",
    },
  ]

  return (
    <div onClick={() => setActive(true)}>
      {active && (
        <DropdownContainer>
          {items.map((item) => (
            <DropdownItem key={item.id}>
              <div onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
              </div>
            </DropdownItem>
          ))}
        </DropdownContainer>
      )}
    </div>
  )
}

const DropdownContainer = styled.ul`
  display: flex;
  border-radius: 8px;
  width: 160px;
  display: flex;
  align-items: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 2px 2px 4px #cfcfcf;
  flex-direction: column;
  padding: 0px;
  position: absolute;
  background: #fff;
  margin: 20px -75px;
  @media ${device.mobile} {
    margin: 49px -120px;
  }
  @media ${device.laptop} {
    margin: 20px -75px;
  }
`
const DropdownItem = styled.div`
  display: flex;
  font-family: "Segoe UI";
  align-items: center;
  height: 44px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  padding-left: 8px;
  &:hover,
  &:focus {
    width: 100%;
    cursor: pointer;
    background: #24db82;
    color: white;
  }
  :first-child {
    border-radius: 8px 8px 0 0;
  }
  :last-child {
    border-radius: 0 0 8px 8px;
  }
`
export default Dropdown
