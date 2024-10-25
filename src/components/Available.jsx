import { useState, useEffect } from "react";
import SingleAvailable from "./SingleAvailable";
import PropTypes from 'prop-types'


const Available = ({handleChoosePlayer}) => {

    const [available, setAvailable] = useState([]);

    // for fetching data

    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setAvailable(data));
    }, [])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-14">
            {
                available.map((singleAvailable, idx) => <SingleAvailable key={idx} 
                propSingleAvailable={singleAvailable}
                handleChoosePlayer={handleChoosePlayer}
                ></SingleAvailable>)
            }
        </div>
    );
};

Available.propType = {
    handleChoosePlayer: PropTypes.func,
    handleSelected: PropTypes.func
}

export default Available;