import React from 'react';

const Privacy = () => {
    return (
        <div style={{ padding: "24px", lineHeight: "1.6" }}>
            <h1>Privacy Policy</h1>

            <p>
                Your privacy is important to us. This Privacy Policy explains how we collect,
                use, store, and protect your personal information when you use our website
                and services. This application is created for learning and demonstration
                purposes, but we still follow responsible and transparent data practices.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
                <li>Basic personal details such as name and email (when voluntarily provided).</li>
                <li>Technical data such as browser type, device information, and IP address.</li>
                <li>Payment-related information through trusted payment partners (e.g., Razorpay).</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>Your information may be used for:</p>
            <ul>
                <li>Processing your payments or service requests.</li>
                <li>Improving the user experience of our website.</li>
                <li>Responding to your queries or support requests.</li>
                <li>Sending important updates regarding services or transactions.</li>
            </ul>

            <h2>Payment Information</h2>
            <p>
                All payment details are handled securely by our payment gateway partner,
                <strong> Razorpay </strong>.
                We do not store your card numbers, CVV, UPI PIN, or any sensitive payment data.
                All transactions are encrypted and processed following industry-standard
                security practices.
            </p>

            <h2>Cookies</h2>
            <p>
                We may use cookies to enhance your browsing experience.
                You can disable cookies in your browser settings if you prefer.
            </p>

            <h2>Third-Party Services</h2>
            <p>
                We may use third-party tools such as analytics or payment gateways.
                These services have their own privacy policies, and we encourage you to
                review them.
            </p>

            <h2>Data Protection & Security</h2>
            <p>
                We take reasonable measures to protect your personal information from
                unauthorized access, misuse, or disclosure. However, no online platform
                can guarantee 100% security.
            </p>

            <h2>Your Rights</h2>
            <p>You may request to:</p>
            <ul>
                <li>Access or update your personal information.</li>
                <li>Delete your information (where applicable).</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us at:
            </p>

            <p>
                <strong>Email:</strong> vishalmali06@gmail.com<br />
                <strong>Website:</strong> https://vishalmali.com<br />
                <strong>Location:</strong> Pune, Maharashtra, India
            </p>

            <p>
                We may update this Privacy Policy from time to time. Please review this page
                periodically for the latest version.
            </p>
        </div>
    );
};

export default Privacy;
