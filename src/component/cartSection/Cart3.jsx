import PropTypes from 'prop-types';
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFire } from "react-icons/fa";

const Cart3 = ({ carts, handelAddToFoodBooking }) => {

    const { recipe_image, recipe_name, Short_description, reparing_time, ingredients, Calories, btn } = carts;
   
    return (
        <div>
            {/*  */}

            <section className=' m-6 p-8'>
                <div className='grid grid-cols-2'>
                    <div className='border-2 border-[#0BE58A] m-6 rounded-xl shadow-2xl'>
                        {/* img */}
                        <div>
                            <img className=' mb-4 rounded-xl shadow-3xl' src={recipe_image} alt="" />
                        </div>
                        {/* h2 */}
                        <div className='grid grid-rows-2 text-center border-b-2 border-[#0BE58A] m-6 p-6'>
                            <h2 className="text-3xl font-bold ">{recipe_name}</h2>

                            <p className="text-xl">{Short_description}</p>
                        </div>
                        {/* ingir */}
                        <div className='border-b-2 border-[#0BE58A] m-6 p-6'>
                            <p className='text-2xl '>
                                <span className='text-center'>ingredients: 6</span>
                                <ul className="marker:text-[#0BE58A] m-8 list-disc pl-5 space-y-3">
                                    <li>{ingredients[0]}</li>
                                    <li>{ingredients[1]}</li>
                                    <li>{ingredients[2]}</li>
                                </ul></p>
                        </div>
                        {/* time */}
                     <div className='flex justify-around'>
                     <div className='flex items-center gap-2'>
                            <MdOutlineWatchLater> </MdOutlineWatchLater>
                            <p>{reparing_time}: Min</p>
                            </div>
                            <div className='flex items-center gap-2'>
                            <FaFire></FaFire>
                            <p>{Calories}: Calories</p>
                        </div>
                     </div>
                        {/* btn */}
                        <div className='text-center'>
                            <button onClick={()=>handelAddToFoodBooking(carts)} className='text-xl font-bold border-2 bg-[#0BE58A] m-4 p-4 rounded-xl shadow-2xl '>{btn}</button>
                        </div>
                    </div>
                </div>

            </section>

            {/*  */}
        </div>
    );
};
Cart3.propTypes = {
    carts: PropTypes.object.isRequired,
    handelAddToFoodBooking:PropTypes.func.isRequired

}
export default Cart3;