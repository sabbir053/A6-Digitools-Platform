import './App.css'
import Navbar from './components/navbar/Navbar'
import Digitools from './components/digitools/Digitools'
import { Suspense } from 'react'


const fetchDigitoolsData = async () => {
  const res = await fetch('/digitoolsData.json')
  return res.json()
}

function App() {
  const digitoolsPromise = fetchDigitoolsData()

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<div className="flex justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>}>
        <Digitools digitoolsPromise={digitoolsPromise}></Digitools>
      </Suspense>
    </>
  )
}

export default App
