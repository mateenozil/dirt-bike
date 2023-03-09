import TopBar from './Components/TopBar/TopBar'
import Menu from './Components/Menu/Menu'
import { GrUser, GrCart } from "react-icons/gr";
import { Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart'
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
          navigate("cart")
        }}>
          <span>My Cart</span>
          <GrCart/>
        </Menu>
      </TopBar>
      
      {/*route*/}
      <Routes>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      {/*footer*/}
    </div>
  )
}

export default App
