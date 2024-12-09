import React, { useState, useEffect } from "react";
import axios from "axios";

const PaymentButton = () => {
  const [paymentStatus, setPaymentStatus] = useState("Pending...");
  const [paymentHistory, setPaymentHistory] = useState([]);

  const TELEGRAM_BOT_TOKEN = "7712348815:AAFTRfqeiSuFqupIpLHEMfMLinf99XExESQ"; // Replace with your bot token
  const TON_WALLET_ADDRESS = "UQCI7d2SQ9ili8W41vpsIuaMyVmBMQcsBxEcM01UE5aL-j5l"; // Replace with your TON wallet address
  const PAYMENT_AMOUNT = 10; // Payment amount in TON (or you can use your preferred currency)

  const handlePayment = () => {
    // Generate a payment request using Telegram Bot API
    const telegramPaymentUrl = `https://t.me/@AuthTester0147_bot?start=pay_${TON_WALLET_ADDRESS}`;

    window.open(telegramPaymentUrl, "_blank");
  };

  const checkPaymentStatus = async () => {
    try {
      // Make a GET request to Telegram's Bot API to check for updates
      const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`);
      const updates = response.data.result;
      
      // Check if the payment is completed based on your Telegram payment flow
      updates.forEach((update) => {
        if (update.message && update.message.text && update.message.text.includes("pay_")) {
          const paymentDetails = {
            id: update.message.message_id,
            amount: PAYMENT_AMOUNT, // You can extract the actual payment amount from the response
            status: "Completed"
          };

          // Add the new payment to history
          setPaymentHistory((prevHistory) => [...prevHistory, paymentDetails]);
          localStorage.setItem("paymentHistory", JSON.stringify([...paymentHistory, paymentDetails]));
          setPaymentStatus("Payment Received");
        }
      });
    } catch (error) {
      console.error("Error fetching payment status:", error);
    }
  };

  useEffect(() => {
    // Poll for payment status updates every 5 seconds (or adjust the frequency as necessary)
    const interval = setInterval(checkPaymentStatus, 5000);
    return () => clearInterval(interval);
  }, [paymentHistory]);

  return (
    <div>
      <button onClick={handlePayment}>Pay {PAYMENT_AMOUNT} TON</button>
      <p>Status: {paymentStatus}</p>
      <h3>Payment History:</h3>
      <ul>
        {paymentHistory.map((transaction, index) => (
          <li key={index}>
            {transaction.id} - {transaction.amount} TON
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentButton;
