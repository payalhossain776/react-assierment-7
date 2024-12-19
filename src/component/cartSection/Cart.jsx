const Cart = () => {
    return (
        <div>
            <section className="flex justify-around items-center">
                <div className="flex ">
                    <div className='border-2 border-[#CC2B52] m-6 rounded-xl shadow-2xl'>
                        {/* img */}
                        <div>
                            <img className=' mb-4 rounded-xl  shadow-3xl' src="" alt="" />
                        </div>
                        {/* h2 */}
                        <div>
                            <h2 className="text-3xl font-bold ">ffffffff</h2>

                            <p className="text-xl">ffffffff</p>
                        </div>
                        {/* ingir */}
                        <div className='flex justify-around items-center'>
                            <p className='text-2xl text-[#CC2B52]'>$<span className=''>fff</span></p>
                        </div>
                        {/* btn */}
                        <div>
                            <button className='text-xl font-bold border-2 bg-[#CC2B52] m-4 p-4 rounded-xl shadow-2xl'>Add to click</button>
                        </div>
                    </div>
                    {/*  */}
                    <div className='border-2 border-[#CC2B52] m-6 rounded-xl shadow-2xl'>
                        <img className=' mb-4 w-full h-[400px] rounded-xl  shadow-3xl' src="" alt="" />

                        <div>
                            <h2 className="text-3xl font-bold ">ffffffff</h2>

                            <p className="text-xl">ffffffff</p>
                        </div>

                        <div className='flex justify-around items-center'>
                            <p className='text-2xl text-[#CC2B52]'>$<span className=''>fff</span></p>
                            <button className='text-xl font-bold border-2 bg-[#CC2B52] m-4 p-4 rounded-xl shadow-2xl'>Add to click</button>
                        </div>
                    </div>
                </div>
                {/* part-2 */}
                <div className='border-2 border-[#CC2B52] m-6 rounded-xl shadow-2xl'>
                    <img className=' mb-4 w-full h-[400px] rounded-xl  shadow-3xl' src="" alt="" />

                    <div>
                        <h2 className="text-3xl font-bold ">ffffffff</h2>

                        <p className="text-xl">ffffffff</p>
                    </div>

                    <div className='flex justify-around items-center'>
                        <p className='text-2xl text-[#CC2B52]'>$<span className=''>fff</span></p>
                        <button className='text-xl font-bold border-2 bg-[#CC2B52] m-4 p-4 rounded-xl shadow-2xl'>Add to click</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;