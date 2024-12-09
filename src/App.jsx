import React, { useEffect, useState } from "react";
import PaymentButton from "./PaymentButton";

const App = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("paymentHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <div>
      <h1>Telegram TON Payment</h1>
      <PaymentButton />
      <h2>Payment History</h2>
      <ul>
        {history.map((payment, index) => (
          <li key={index}>
            Transaction ID: {payment.id}, Amount: {payment.amount} TON
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
