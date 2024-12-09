import React from 'react'

const App = () => {
  return (
    <div>
      <div>
        {!connected ? (
          <button onClick={handleConnect}>Connect to TON</button>
        ) : (
          <div>
            <p>Connected: {account.address}</p>
            <button onClick={handleDisconnect}>Disconnect</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
