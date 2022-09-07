import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Copied = ({ active, setActive }) => {
  return (
    <CopiedStyle
      active={active}
      setActive={setActive}
      onClick={() => setActive(false)}
    >
      Copied
    </CopiedStyle>
  )
}

const CopiedStyle = styled.div`
  position: relative;
  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 38px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  color: #828282;
  font-size: 13px;
  font-family: "Inter";
  z-index: 1;
  margin: 0 auto;
`

export default Copied
