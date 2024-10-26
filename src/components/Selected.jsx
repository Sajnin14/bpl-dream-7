import PropTypes from 'prop-types'
import Select from './Select';

const Selected = ({propSelected, propHandleDelete, handleAddMorePlayer}) => {

    return (
        <div>
            {/* <h2 className='font-bold text-3xl text-start'>Selected ({propSelected.length}/8)</h2> */}
            
            {
                propSelected.map(((select, idx) => <Select key={idx} propSelect = {select}
                propHandleDelete={propHandleDelete}></Select>))
            }

            <button onClick={handleAddMorePlayer} className='border border-gray-800 rounded-lg p-2 flex m-4'><p className='bg-[#E7FE29] rounded-lg py-2 px-4'>Add More Player</p></button>

        </div>
    );
};

Selected.propTypes = {
    propSelected: PropTypes.object,
    propHandleDelete: PropTypes.func,
    handleAddMorePlayer: PropTypes.func
}

export default Selected;