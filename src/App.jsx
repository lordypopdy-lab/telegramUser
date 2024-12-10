import React from 'react'
import { TonConnectButton, Locales, useTonConnectUI } from "@tonconnect/ui-react"

const App = () => {

  const [tonConnectUI, setOptions] = useTonConnectUI();

  const onLanguageChange = (lang) => {
    setOptions({ language: lang });
  };


  const myTransaction = {
    validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
    messages: [
      {
        address: "EQDD8dqOzaj4zUK6ziJOo_G2lx6qf1TEktTRkFJ7T1c_fPQb",
        amount: "20000000",
        // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
      }
    ]
  }

  return (
    <div>
      <TonConnectButton 
      style={{float: 'right'}}
      />
      <div>
        <label>language</label>
        <select onChange={e => onLanguageChange(e.target.value)}>
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>
      </div>
      <h1>Hello World</h1>
      <button onClick={() => tonConnectUI.sendTransaction(myTransaction)}>
        Send transaction
      </button>
    </div>
  )
}

export default App
