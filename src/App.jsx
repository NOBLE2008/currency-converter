import { useState } from 'react'
import './App.css'

function App() {

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
