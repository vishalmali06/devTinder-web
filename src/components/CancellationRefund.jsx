import React from 'react'

const CancellationRefund = () => {
    return (
        <div style={{ padding: "24px", lineHeight: "1.6" }}>
            <h1>Cancellation & Refund Policy</h1>

            <p>
                Thank you for using our services. Since this application is part of a learning
                and demonstration project, we follow a simple and transparent refund policy.
            </p>

            <h2>Cancellation Policy</h2>
            <p>
                You may cancel your request or order anytime before it is processed.
                Once a service has been initiated or delivered, cancellation may not be possible.
            </p>

            <h2>Refund Policy</h2>
            <p>
                Refunds are applicable only in specific cases where:
            </p>
            <ul>
                <li>The payment was deducted but the service was not delivered.</li>
                <li>A duplicate payment was made by mistake.</li>
                <li>The user was charged incorrectly due to a technical error.</li>
            </ul>

            <p>
                Once a valid refund request is received, the amount will be processed within
                <strong> 5–7 business days </strong> and credited to the original payment method.
            </p>

            <h2>Contact for Refunds</h2>
            <p>
                For any cancellation or refund-related requests, please contact us at:
            </p>

            <p>
                <strong>Email:</strong> vishalmali06@gmail.com<br />
                <strong>Website:</strong> https://vishalmali.com<br />
                <strong>Location:</strong> Pune, Maharashtra, India
            </p>

            <p>
                We are committed to resolving refund issues promptly and professionally.
            </p>
        </div>
    );
};

export default CancellationRefund;
