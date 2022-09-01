import React, { useState } from "react"
import styled from "styled-components"

const DropdownContainer = styled.div`
  display: flex;
  border-radius: 8px;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 2px 2px 4px #cfcfcf;
`
const DropdownItem = styled.div`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  padding-left: 8px;
  align-self: stretch;
  border-radius: inherit;
  &:hover,
  &:focus {
    cursor: pointer;
    background: #24db82;
    color: white;
  }
`

const Dropdown = ({ title, multiSelect = false }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)

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
    <DropdownContainer>
      <DropdownItem
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <p>{title}</p>
      </DropdownItem>
      {open && (
        <ul>
          {items.map((item) => (
            <DropdownItem key={item.id}>
              <div onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
              </div>
            </DropdownItem>
          ))}
        </ul>
      )}
    </DropdownContainer>
  )
}

export default Dropdown
