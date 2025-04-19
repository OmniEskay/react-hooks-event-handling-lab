import React from 'react'; 

function Keypad (){

    const handlePasswordChange = (event) => {
        console.log("Entering password...");
    };

    return (
        <div>
            <input
                type="password" 
                onChange={handlePasswordChange} 
                aria-label="Password Input" 
                placeholder="Enter password" 
            />
        </div>
    );
}

export default Keypad;