import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contect from "./pages/Contect"
import User from "./pages/User"
import Nav from "./ui/Nav"
import About from "./pages/About"
import Product from "./ui/Product"
import Showuser from "./ui/Showuser"

function Main() {
  const data = [
    {
      id: 11,
      name: "Audi"
    },
    {
      id: 12,
      name: "Audi"
    },
    {
      id: 13,
      name: "Audi"
    },
    {
      id: 14,
      name: "Audi"
    },
  ]
  return (
    
        <Router basename="/StoreCar/">
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contect" element={<Contect/>} />
                <Route path="/users" element={<User data={data}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/users/:id" element={<Showuser user={data}/>}/>
                {/* <Route path="/product/:id" element={<Product/>}/> */}
            </Routes>
        </Router>

  )
}

export default Main