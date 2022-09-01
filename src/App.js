import "./App.css"
import WirepayPage from "./components/WirepayPage"
import styled from "styled-components"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PandapayPage from "./components/PandapayPage"
import Main from "./components/Main"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path="/pandapay" element={<PandapayPage />} />
          <Route path="/wirepay" element={<WirepayPage />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  )
}
// {
//   ;<Router>
//     <Routes>
//       <Route path="/pandapay" element={<PandapayPage />} />
//       <Route path="/wirepay" element={<WirepayPage />} />
//       <Route path="/" element={<Main />} />
//     </Routes>
//   </Router>
// }

export default App
