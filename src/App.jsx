import { useState } from 'react'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [toValue, setToValue] = useState('USD')
  const [fromValue, setFromValue] = useState('USD')

  const handleToValueChange = (e) => {
    setToValue(e.target.value)
  }

  const handleFromValueChange = (e) => {
    setFromValue(e.target.value)
  }

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
  }


  return (
    <div className='App'>
      <input type="text" name="amount" id="amount" value={amount} onChange={handleAmountChange}/>
      <select name="from" value={fromValue} onChange={handleFromValueChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select name="to" value={toValue} onChange={handleToValueChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>{convertedAmount}</p>
    </div>
  )
}

export default App
