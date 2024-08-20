import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header_main from './components/header/Header_main'
import Main from './components/Main'
import Flights from './components/pages/flights/Flights'
import Hotels from './components/pages/hotels/Hotels'
import SignUp from './components/pages/auth/SignUp'
import Header from './components/header/Header'
import LogIn from './components/pages/auth/LogIn'
import 'swiper/css';
import ForgotPassword from './components/pages/auth/ForgotPassword'
import gsap from 'gsap'
import _ScrollTrigger from 'gsap/ScrollTrigger'
import Three from './components/3d/Three'
// import Three from './components/3d/Three'
// import Counter from './components/counter/Counter'
gsap.registerPlugin(_ScrollTrigger);

function App() {

  return (
    <div className='text-xs lg:text-sm'>
      <Three/>
      {/* <Counter/> */}
      <Routes>
        <Route path='/' element={<Header_main />} />
        <Route path='*' element={<Header />} />
        <Route path='logIn' element={<></>} />
        <Route path='signUp' element={<></>} />
        <Route path='forgotPassword' element={<></>} />
      </Routes>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='flights' element={<Flights />} />
        <Route path='stays' element={<Hotels />} />
        <Route path='logIn' element={<LogIn />} />
        <Route path='signUp' element={<SignUp/>} />
        <Route path='forgotPassword' element={<ForgotPassword/>} />
      </Routes>
      <Routes>
        <Route path='*' element={<Footer />} />
        <Route path='logIn' element={<></>} />
        <Route path='signUp' element={<></>} />
        <Route path='forgotPassword' element={<></>} />
      </Routes>
    </div>
  )
}

export default App
