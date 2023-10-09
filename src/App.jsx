// import './App.css'
import { BrowserRouter,Route,Routes }  from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Cart  from './pages/Cart';
import Shopping from './pages/Shopping';
function App() {
  

  return (
    <div className="Pro">
      <BrowserRouter>
      <Navbar/>



        <Routes>
          <Route path='/' element={<Shopping/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
