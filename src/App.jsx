import './App.css'
import Navbar from './components/navbar/Navbar'
import Digitools from './components/digitools/Digitools'
import { Suspense, useState } from 'react'


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
      <Suspense fallback={<div className="flex justify-center pt-20">
        <span className="loading loading-dots loading-xl"></span>
      </div>}>
        <Digitools isCart={isCart} setIsCart={setIsCart} digitoolsPromise={digitoolsPromise}></Digitools>
      </Suspense>
    </>
  )
}

export default App
