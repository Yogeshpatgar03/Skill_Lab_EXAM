import Home from "./components/Home";
import About from "./components/AboutUs";
import Courses from "./components/Courses";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
const App = ()=>{
  return(
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App