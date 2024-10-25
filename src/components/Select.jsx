import PropTypes from 'prop-types'
import { RiDeleteBin6Line } from "react-icons/ri";

const Select = ({ propSelect, propHandleDelete }) => {

    const { id, image, name, role, price} = propSelect;
    console.log(price);
    return (
            <div className='border border-gray-300 p-4 m-4 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <img src={image} className='w-20 rounded-lg' />
                        <div className='text-start'>
                            <p className='font-semibold text-xl'>{name}</p>
                            <p className='text-gray-500'>{role} </p>
                        </div>
                    </div>
                    <button onClick={() => propHandleDelete(id)}><RiDeleteBin6Line className='text-2xl text-red-500'></RiDeleteBin6Line></button>
                </div>
            </div>
    );
};

Select.propTypes = {
    propSelect: PropTypes.object,
    propHandleDelete: PropTypes.func
}
export default Select;