import React from 'react';
import './App.css';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';

const App = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();

  // Check if the wallet is connected
  const isConnected = tonConnectUI.wallet; // `wallet` is non-null when connected

  const onLanguageChange = (lang) => {
    setOptions({ language: lang });
  };

  const myTransaction = {
    validUntil: Math.floor(Date.now() / 1000) + 60, // 60 seconds
    messages: [
      {
        address: 'EQDD8dqOzaj4zUK6ziJOo_G2lx6qf1TEktTRkFJ7T1c_fPQb',
        amount: '20000000',
      },
    ],
  };

  return (
    <div>
      {/* TonConnect Wallet Button */}
      <TonConnectButton className="tonConnect" />
      
      <h1>Hello World</h1>

      {/* Display the Send Transaction button only when wallet is connected */}
      {isConnected && (
        <button
          className="sendBtn"
          onClick={() => tonConnectUI.sendTransaction(myTransaction)}
        >
          Send Transaction
        </button>
      )}
    </div>
  );
};

export default App;
