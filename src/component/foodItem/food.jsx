import Fooods from "../foods/Fooods";
import PropTypes from 'prop-types';

const Food = ({ foodBookin}) => {
    //    const{recipe_name}=foodBookin
    return (
        <div>
            <div>
                <div className="font-bold border-2 border-[#0BE58A] m-4 p-4 rounded-xl shadow-2xl">
                    <div>
                        <h1 className="text-center font-blod text-4xl border-b-2 border-[#0BE58A] mb-6">
                            want To Cook: {foodBookin.length}
                        </h1>
                    </div>
                    <div className="flex justify-around items-center gap-24 font-bold border-2 border-[#0BE58A] m-4 p-4 rounded-xl shadow-2xl">
                        {/* <h1>index</h1> */}
                        <h1>Name</h1>
                        <h1>Time</h1>
                        <h1>Celoris</h1>
                        <button>cook</button>
                    </div>
                    <div>
                        {
                            foodBookin.map((foodBook, idx) => <Fooods
                                key={idx}
                                foodBook={foodBook}
                               
                            ></Fooods>)
                        }
                    </div>
                    {/*  */}
                    <h1 className="text-center font-blod text-4xl border-b-2 border-[#0BE58A] mt-8 mb-6">
                    Currently To Cook:
                </h1>
                <div className="flex justify-around items-center gap-24 font-bold border-2 border-[#0BE58A] m-4 p-4 rounded-xl shadow-2xl">
                    {/* <h1>index</h1> */}
                    <h1>Name</h1>
                    <h1>Time</h1>
                    <h1>Celoris</h1>
                </div>
                </div>
            </div>


        </div>
    );
};
Food.propTypes = {
    foodBookin: PropTypes.array.isRequired,


}

export default Food;