import "./App.css"
import WirepayPage from "./components/WirepayPage"
import styled from "styled-components"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PandapayPage from "./components/PandapayPage"
import Main from "./components/Main"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Container = styled.div`
  flex-grow: 1;
`

const App = () => {
  return (
    <Router>
      <MainWrapper>
        <Header />
        <Container>
          <Routes>
            <Route path="/pandapay" element={<PandapayPage />} />
            <Route path="/wirepay" element={<WirepayPage />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </Container>
        <Footer />
      </MainWrapper>
    </Router>
  )
}

export default App
