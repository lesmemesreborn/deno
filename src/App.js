import "./App.css"
import WirepayPage from "./components/WirepayPage"
import styled from "styled-components"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PandapayPage from "./components/PandapayPage"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const App = () => {
  return (
    <Container>
      <Header />
      <WirepayPage />
      <PandapayPage />
      <Footer />
    </Container>
  )
}

export default App
