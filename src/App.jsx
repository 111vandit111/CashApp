import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './section/hero/hero'
import Payments from './section/payments/Payments'
import Banking from './section/banking/Banking'
import CashB from './components/cashBoost/CashB'
import Investing from './section/investments/investing'
function App() {

  return (
    <>
      <Hero />
      <Payments />
      <Banking />
      <CashB />
      <Investing />
    </>
  )
}

export default App
