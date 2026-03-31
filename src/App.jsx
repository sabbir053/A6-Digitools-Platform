import './App.css'
import Navbar from './components/navbar/Navbar'
import Digitools from './components/digitools/Digitools'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Hero from './components/hero/Hero'
import Stats from './components/stats/Stats'
import Steps from './components/steps/Steps'
import Pricing from './components/pricing/Pricing'
import Workflow from './components/workflow/Workflow'
import Footer from './components/footer/Footer'


const fetchDigitoolsData = async () => {
  const res = await fetch('/digitoolsData.json')
  return res.json()
}


function App() {
  const digitoolsPromise = fetchDigitoolsData()
  const [isCart, setIsCart] = useState([])


  return (
    <>
      <Navbar isCart={isCart}></Navbar>
      <Hero></Hero>
      <Stats></Stats>
      <Suspense fallback={<div className="flex justify-center pt-20">
        <span className="loading loading-dots loading-xl"></span>
      </div>}>
        <Digitools isCart={isCart} setIsCart={setIsCart} digitoolsPromise={digitoolsPromise}></Digitools>
      </Suspense>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>

      {/* inpost toastify */}
      <ToastContainer />
    </>
  )
}

export default App
