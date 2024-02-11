import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Auth from "./pages/auth"
import Expensetracker from "./pages/expense-tracker"

import './App.css'

function App() {
  

  return (
    <div>
      <Router >
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/expense" element={<Expensetracker />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
