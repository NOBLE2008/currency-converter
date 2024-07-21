import { useState } from 'react'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [toValue, setToValue] = useState('USD')
  const [fromValue, setFromValue] = useState('USD')


  return (
    <div className='App'>
      <input type="text" name="amount" id="amount" />
      <select name="from" value='USD'>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select name="to" value='USD'>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>AMOUNT</p>
    </div>
  )
}

export default App
