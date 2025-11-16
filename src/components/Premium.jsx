import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useEffect, useState } from 'react';

const Premium = () => {

    const [isUserPremium, setIsuserPremium] = useState(false);

    useEffect(() => {
        verifyPremiumUser();
    }, []);


    const verifyPremiumUser = async () => {
        const res = await axios.get(BASE_URL + "/premium/verify", {
            withCredentials: true,
        })
        if (res.data.isPremium) {
            setIsuserPremium(true);
        }
    };

    const hnadleBuyClick = async (tyep) => {
        const order = await axios.post(BASE_URL + "/payment/create",
            {
                membershipType: tyep,
            },
            { withCredentials: true })


        const { amount, keyId, currency, notes, orderId } = order.data;

        const options = {
            key: keyId,
            amount,
            currency,
            name: 'Vishal Mali Application',
            description: 'Connect to other developers',
            order_id: orderId,
            prefill: {
                name: notes.firstName + "" + notes.lastName,
                email: notes.emailId,
                contact: '9999999999'
            },
            theme: {
                color: '#F37254'
            },
            handler: verifyPremiumUser,
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return isUserPremium ? "You are already a Premium User !!!" : (<div className='m-10'>
        <div className="flex w-full">
            <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
                <h1 className='font-bold text-3xl'>Silver Membership</h1>
                <ul>
                    <li> - Chat with other people</li>
                    <li> - 100 connection Request per day</li>
                    <li> - Blue Tick</li>
                    <li> - 3 Months</li>
                </ul>
                <button onClick={() => hnadleBuyClick("silver")} className='btn btn-secondary'>Buy Silver</button>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
                <h1 className='font-bold text-3xl'>Gold Membership</h1>
                <ul>
                    <li> - Chat with other people</li>
                    <li> - Infinite connection Request per day</li>
                    <li> - Blue Tick</li>
                    <li> - 6 Months</li>
                </ul>
                <button onClick={() => hnadleBuyClick("gold")} className='btn btn-primary'>Buy Silver</button>
            </div>
        </div>
    </div>)

};

export default Premium