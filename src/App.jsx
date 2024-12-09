import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [walletDetails, setWalletDetails] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const telegram = window.Telegram.WebApp;

    if (telegram) {
      // Initialize WebApp
      telegram.ready();
      setUser(telegram.initDataUnsafe?.user || null);
      setIsReady(true);
    }
  }, []);

  const handleConnectWallet = () => {
    // Example wallet details (replace with real wallet integration)
    const walletInfo = {
      user: {
        id: window.Telegram.WebApp.initDataUnsafe?.user?.id,
        first_name: window.Telegram.WebApp.initDataUnsafe?.user?.first_name,
        last_name: window.Telegram.WebApp.initDataUnsafe?.user?.last_name,
        username: window.Telegram.WebApp.initDataUnsafe?.user?.username,
      },
      wallet: {
        address: "0x1234567890abcdef1234567890abcdef12345678", // Mock wallet address
        balance: "10.5", // Mock balance
        currency: "TON", // Example currency
      },
      timestamp: new Date().toISOString(),
    };

    setWalletDetails(walletInfo);
  };

  const saveAsJson = () => {
    if (!walletDetails) {
      alert("No wallet details to save!");
      return;
    }

    const dataStr = JSON.stringify(walletDetails, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Create a link element to trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = "wallet_details.json";
    a.click();

    // Revoke the object URL to free up memory
    URL.revokeObjectURL(url);
  };

  if (!isReady) {
    return <div>Loading Telegram WebApp...</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to Telegram Wallet Mini App</h1>
      {user ? (
        <p>Hello, {user.first_name}!</p>
      ) : (
        <p>Loading user details...</p>
      )}
      <button
        onClick={handleConnectWallet}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
      >
        Connect Wallet
      </button>
      <button
        onClick={saveAsJson}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        Save Wallet Details
      </button>
      {walletDetails && (
        <pre style={{ marginTop: "20px", background: "#f9f9f9", padding: "10px" }}>
          {JSON.stringify(walletDetails, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default App;
