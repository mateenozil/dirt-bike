import TopBar from './Components/TopBar/TopBar'
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'
import { GrUser, GrCart, GrFacebook, GrInstagram, GrMail } from "react-icons/gr";
import { Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Home from './Pages/Home';
import Product from './Pages/Product';
import NotFound from './Pages/NotFound';

function App() {
  let navigate = useNavigate()
  return (
    <div className="overflow-x-hidden scroll-smooth">
      {/*header*/}
      <TopBar>
        <Menu click={()=>{
          alert("Log in page unavailable")
        }}>
          <span>Log In</span>
          <GrUser/>
        </Menu>
        <Menu click={()=>{
          alert("Cart page unavailable")
        }}>
          <span>My Cart</span>
          <GrCart/>
        </Menu>
      </TopBar>
      
      {/*route*/}
      <Routes>
        <Route path='/product' element={<Product/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      {/*footer*/}
      <Footer>
        <div className='text-center'>
          <p>Dirt Bike</p>
          <div className='flex justify-center text-light-50 space-x-2'>
            <GrFacebook/>
            <GrInstagram/>
            <GrMail/>
          </div>
          <p>Copyright © 2022</p>     
        </div>
      </Footer>
    </div>
  )
}

export default App
