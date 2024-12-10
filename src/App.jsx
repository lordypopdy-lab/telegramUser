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
          address: "EQBBJBB3HagsujBqVfqeDUPJ0kXjgTPLWPFFffuNXNiJL0aA",
          amount: "20000000",
          // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
      },
      {
          address: "EQDmnxDMhId6v1Ofg_h5KR5coWlFG6e86Ro3pc7Tq4CA0-Jn",
          amount: "60000000",
          // payload: "base64bocblahblahblah==" // just for instance. Replace with your transaction payload or remove
      }
  ]
}

  return (
    <div>
      <TonConnectButton >TON Connect </TonConnectButton>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
