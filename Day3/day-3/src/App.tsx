import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
    </>
  )
}

export default App
