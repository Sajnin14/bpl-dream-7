// import bg from '../assets/bg-shadow.png'
import logoFooter from '../../assets/logo-footer.png'
import './News.css'


const News = () => {
    return (
        <div className="my-20 relative">
            <div className='w-5/6 absolute -top-1/4 left-28 object-contain rounded-xl border border-gray-200'>
                <div className="text-center py-24 space-y-4 m-3 bg-image">
                    <h4 className='font-bold text-2xl text-gray-700'>Subscribe to our Newsletter</h4>
                    <p className='text-gray-500'>Get the latest updates and news right in your inbox!</p>

                    <div>
                        <input className='border border-gray-400 p-2 rounded-lg mr-2' type="email" placeholder='Enter Your Email' />
                        <button className='border border-gray-400 py-2 px-4 rounded-lg bg-gradient-to-br from-purple-400 to-yellow-500'>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='bg-[#06091A] pt-20 pb-5 mt-72'>
                <img src={logoFooter} className='mx-auto mt-32' />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-14'>
                    <div className='text-center md:text-start lg:pl-20 space-y-2'>
                        <h4 className='text-gray-200 font-semibold'>About Us</h4>
                        <p className='text-gray-500'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>

                    <div>
                        <h4 className='text-gray-200 font-semibold mb-4'>Quick Links</h4>
                        <ul>
                            <li className='text-gray-500 list-disc list-inside'>Home</li>
                            <li className='text-gray-500 list-disc list-inside'>Services</li>
                            <li className='text-gray-500 list-disc list-inside'>About</li>
                            <li className='text-gray-500 list-disc list-inside'>Contact</li>
                        </ul>
                    </div>

                    <div className='text-center md:text-start space-y-3'>
                        <h4 className='text-gray-200 font-semibold mb-4'>Subscribe</h4>
                        <p className='text-gray-500'>Subscribe to our newsletter for the latest updates.</p>
                        <div>
                            <input className='border border-gray-400 p-1 rounded-lg mr-2' type="email" placeholder='Enter Your Email' />
                            <button className='border border-gray-400 py-1 px-4 rounded-lg bg-gradient-to-br from-purple-400 to-yellow-500'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <hr />

                <p className='text-center p-5 m-5 text-gray-400'>@2024 Your Company All Rights Reserved.</p>
            </div>


        </div>
    );
};

News.propTypes = {

};

export default News;