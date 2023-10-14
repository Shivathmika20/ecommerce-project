import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart  from './pages/Cart';
import Shopping from './pages/Shopping';
import ShopContext from './context/ShopContext';



function App() {

  return (
   
    <div className="Pro">
      <ShopContext>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Shopping/>} />
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </BrowserRouter>
      </ShopContext>
    </div>
    
  )
}

export default App
