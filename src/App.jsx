
import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './components/home/Home';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className='varela-round-regular'>
      <Toaster />
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}
export default App
