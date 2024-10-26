
import PropTypes from 'prop-types';
import { CiFlag1 } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";



const SingleAvailable = ({ propSingleAvailable, handleChoosePlayer}) => {
    const {image, name, country, role, price, rating, batting_style } = propSingleAvailable;
    // console.log(propSingleAvailable);
    return (


        <div className='border border-gray-500 p-4 rounded-lg space-y-3'>
            <img className='rounded-lg w-full h-56 object-cover' src={image} />
            <div className='flex items-center gap-2'>
                <BsPersonCircle className='text-xl'></BsPersonCircle>
                <p className='text-lg font-semibold'>{name}</p>
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2 text-gray-500 text-lg'>
                    <CiFlag1 />
                    <p>{country}</p>
                </div>
                <button className='bg-gray-100 rounded-lg p-2'>{role}</button>
            </div>

                <hr />
                <p className='text-start font-bold'>Rating: {rating}</p>

                <div className='flex items-center justify-between'>
                    <p className='font-bold'>{batting_style}</p>
                    <p className='text-gray-400'>{batting_style}</p>
                </div>

                <div className='flex justify-between'>
                    <p className='font-bold'>Price: ${price}</p>
                    <button onClick={() => handleChoosePlayer(propSingleAvailable)} className='border border-gray-400 p-1 rounded-lg'>Choose Player</button>
                </div>


        </div>
    );
};

SingleAvailable.propTypes = {
    propSingleAvailable: PropTypes.object,
    handleChoosePlayer: PropTypes.func,
    handleSelected: PropTypes.func
};

export default SingleAvailable;