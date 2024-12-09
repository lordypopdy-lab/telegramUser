import axios from 'axios';

// Replace with your bot's token from BotFather
const BOT_TOKEN = '7712348815:AAFTRfqeiSuFqupIpLHEMfMLinf99XExESQ';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/`;

// Function to get the user's wallet address
export const getWalletAddress = async (userId) => {
    try {
        const response = await axios.post(`${TELEGRAM_API_URL}getUserProfilePhotos`, {
            user_id: userId,
        });

        if (response.data && response.data.result) {
            // Process response to fetch the wallet address (this will depend on your wallet integration)
            return response.data.result; // Placeholder
        }
        throw new Error('Unable to fetch wallet address');
    } catch (error) {
        console.error('Error fetching wallet address:', error);
        throw error;
    }
};
