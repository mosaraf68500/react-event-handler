import React, { useState } from 'react';

const Ball = () => {

    const countBallStyle={
        border:'2px solid green',
        margin:'20px',
        padding:'10px',
        borderRadius:'10px'
    }


    const [ball, setball]=useState(0)

    const rightBall=()=>{
        const countBall=ball+1;
        setball(countBall)
    }

    const whiteball=()=>{
        const countBall=ball+0;
        setball(countBall)
        alert("ball is white!")

    }
    return (
        
        <div style={countBallStyle}>
            <h2>countBall</h2>
            {
                ball===6 && <p>completed the over </p>
            }
            <h1>total Ball: {ball}</h1>
            <button onClick={rightBall}>rightBall</button>
            <button onClick={whiteball}>whiteball</button>

        </div>
    );
};

export default Ball;