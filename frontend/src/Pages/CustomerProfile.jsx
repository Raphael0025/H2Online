import React from 'react'
import { useLocation } from 'react-router-dom';

const CustomerProfile = () => {
    // Get the location object from React Router
    const location = useLocation();

    // Access the customer data from the location state
    const { customerData } = location.state;

    // Now you can use customerData as needed
    return (
        <main id='customerprofile' className='container-fluid'>
            <div>
                <h1>Customer Profile</h1>
                <p>ID: {customerData.id}</p>
                <p>Name: {customerData.name}</p>
                <p>Phone: {customerData.phone}</p>
                <p>Address: {customerData.address}</p>
                {/* Add more details as needed */}
            </div>
        </main>
    );
};

export default CustomerProfile