import React, { useState } from 'react';

const Batsman = () => {

    const batsmanStyle={
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'10px',
        margin:'20px'
    }

    const [sixes , setsixes]=useState(0)


    const [runs,setruns]=useState(0);
    const handlesingle=()=>{

        const newRuns=runs+1;
        setruns(newRuns);
    }

    const handleFour=()=>{

        const newRuns=runs+4;
        setruns(newRuns);
    }

    const handleSix=()=>{
        const totalSix=sixes+1;
        setsixes(totalSix);

        const newRuns=runs+6;
        setruns(newRuns);
    }
    return (
        
        <div style={batsmanStyle}>
        <h2>Batsman in bangladesh</h2>
        {
            runs>=50 && <p>wow! tmi 50 runs kore felso</p>
        }
        <p><small>sixes: {sixes}</small></p>

        <h1>score : {runs}</h1>
        <button onClick={handlesingle}>singleRun</button>
        <button onClick={handleFour}>fourRuns</button>
        <button onClick={handleSix}>sixesRun</button>

        </div>
    );
};

export default Batsman;