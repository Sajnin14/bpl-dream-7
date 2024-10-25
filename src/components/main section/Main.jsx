
// import PropTypes from 'prop-types';

const Main = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">Available Players</p>
                <div>
                    <button className="border p-3">Available</button>
                    <button className="border p-3">Selected</button>
                </div>
            </div>
        </div>
    );
};

Main.propTypes = {
    
};

export default Main;