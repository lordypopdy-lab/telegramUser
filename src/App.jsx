import React from 'react';
import './App.css';
import TradingView from './TradingView';
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

      <div className="language-selector">
      <select
        id="language-select"
        onChange={(e) => onLanguageChange(e.target.value)}
        className="styled-select"
      >
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="pt-BR">Portuguese (Brazil)</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="fr">French</option>
        <option value="zh-CN">Chinese (Simplified)</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
        <option value="it">Italian</option>
        <option value="hi">Hindi</option>
        <option value="ar">Arabic</option>
      </select>
    </div>

      <h4 className='header'>Connect wallet before Sending Transaction</h4>
      <button
        className="sendBtn"
        onClick={() => tonConnectUI.sendTransaction(myTransaction)}
      >
        Send Transaction
      </button>

      <TradingView />
    </div>
  );
};

export default App;
