import "./App.css"
import WirepayPage from "./components/WirepayPage"
import styled from "styled-components"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PandapayPage from "./components/PandapayPage"
import Main from "./components/Main"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { device } from "./device"

const App = () => {
  return (
    <MainWrapper>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/pandapay" element={<PandapayPage />} />
            <Route path="/wirepay" element={<WirepayPage />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  color: #000;
  font-family: "Segoe UI";
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Container = styled.div`
  flex-grow: 1;
  margin-bottom: 160px;
`

export default App
