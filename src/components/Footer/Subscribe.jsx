import { useState } from 'react';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // Track success messages
    const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleOtpChange = (e) => setOtp(e.target.value);

    const handleSubmit = async () => {
        if (otpSent) {
            // Step 2: OTP verification
            setLoading(true);
            try {
                // Call backend to verify OTP
                const response = await fetch('https://one28back-1.onrender.com/api/auth/verify-otp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, otp }),
                });

                const data = await response.json();
                if (response.ok) {
                    setSuccessMessage('Successfully Subscribed!');
                    setError('');
                    setEmail('');
                    setOtp('');
                    setOtpSent(false);
                } else {
                    setError(data.message || 'OTP verification failed');
                    setSuccessMessage('');
                }
            } catch (error) {
                setError('Error verifying OTP');
                setSuccessMessage('');
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(true);
            try {
                const response = await fetch('https://one28back-1.onrender.com/api/auth/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                });

                const data = await response.json();
                if (response.ok) {
                    setOtpSent(true);
                    setSuccessMessage('OTP sent! Please check your email.');
                    setError('');
                } else {
                    setError(data.message || 'Error sending OTP');
                    setSuccessMessage('');
                }
            } catch (error) {
                setError('Error subscribing');
                setSuccessMessage('');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className='input-section-box'>
            <div className='subscribe'>
                {otpSent ? (
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={handleOtpChange}
                    />
                ) : (
                    <input
                        type="email"
                        placeholder="Subscribe with email"
                        value={email}
                        onChange={handleEmailChange}
                        disabled={otpSent}
                    />
                )}
                <button onClick={handleSubmit}>
                    {loading ? <div className="loader"></div> : otpSent ? 'Verify OTP' : 'Send'}
                </button>
            </div>

            {error && <p className="error-message">{error}</p>}

            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default Subscribe;


