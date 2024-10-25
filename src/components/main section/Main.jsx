
import PropTypes from 'prop-types';
import './main.css'

const Main = ({handleActive, isActive, selectedHandleChoosePlayer}) => {
     
    console.log(selectedHandleChoosePlayer);

    console.log(isActive);
    const {about} = isActive;
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">Available Players</p>
                <div>
                    <button onClick={() => handleActive("available")} className={`${about? "about-btn active-btn" : "about-btn"}`}>Available</button>
                    <button onClick={() => handleActive("selected")} className={`${about? "select-btn" : "select-btn active-btn"}`}>Selected {selectedHandleChoosePlayer.length}</button>
                </div>
            </div>
        </div>
    );
};

Main.propTypes = {
    handleActive: PropTypes.func,
    isActive: PropTypes.object,
    selectedHandleChoosePlayer: PropTypes.number
};

export default Main;