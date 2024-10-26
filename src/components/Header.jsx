import logo from '../assets/logo.png'
import coin from '../assets/coin.png'
import banner from '../assets/banner-main.png'
import bg from '../assets/bg-shadow.png'
import PropTypes from 'prop-types'


const Header = ({propCoin, propHandleCoin}) => {
    
    return (
        <div>
            <div className='flex justify-between items-center'>

                <img src={logo} alt="logo of BPL-dream-11" />
                <div className='flex gap-5 items-center list-none'>
                    <li><a className='text-gray-500' href="#">Home</a></li>
                    <li><a className='text-gray-500' href="#">Fixture</a></li>
                    <li><a className='text-gray-500' href="#">Teams</a></li>
                    <li><a className='text-gray-500' href="#">Schedules</a></li>
                    <button className='flex items-center gap-2 border border-gray-200 p-3 rounded-xl font-bold'>{propCoin} Coin <p><img className='w-6' src={coin} /></p></button>
                </div>

            </div>

            <div style={{ backgroundImage: `url(${bg})` }} className="bg-[#131313e9] my-10 relative">
                {/* <img className='absolute object-fit' src={bg} /> */}
                <div className='p-16 space-y-5'>
                    <img className='mx-auto object-contain' src={banner} />
                    <p className='text-white text-3xl font-semibold'>Assemble Your Ultimate Dream 11 Cricket Team</p>
                    <p className='text-gray-100'>Beyond Boundaries Beyond Limits</p>
                    <button onClick={propHandleCoin} className='border border-[#E7FE29] rounded-lg'><p className='bg-[#E7FE29] font-semibold rounded-lg p-3 m-1'>Claim Free Credit</p></button>
                    
                </div>
            </div>

        </div>
    );
};

export default Header;

Header.propTypes = {
    propCoin: PropTypes.number,
    propHandleCoin: PropTypes.func
}