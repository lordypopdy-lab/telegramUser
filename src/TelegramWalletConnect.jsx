import React, { useState } from 'react';
import { getWalletAddress } from './telegramApi';

const TelegramWalletConnect = () => {
    const [userId, setUserId] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFetchAddress = async () => {
        if (!userId) {
            setError('Please provide a valid user ID');
            return;
        }

        setLoading(true);
        setError('');
        
        try {
            const address = await getWalletAddress(userId);
            setWalletAddress(address);
        } catch (err) {
            setError('Error fetching wallet address');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Connect Telegram Wallet</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <button onClick={handleFetchAddress} disabled={loading}>
                    {loading ? 'Loading...' : 'Fetch Wallet Address'}
                </button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {walletAddress && (
                <div>
                    <h3>Wallet Address:</h3>
                    <p>{walletAddress}</p>
                </div>
            )}
        </div>
    );
};

export default TelegramWalletConnect;
