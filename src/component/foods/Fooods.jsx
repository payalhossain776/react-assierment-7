import PropTypes from 'prop-types';

const Fooods = ({foodBook}) => {
    const{ recipe_name, reparing_time, Calories }=foodBook;
    return (
        <div>
                <div className='flex justify-around items-center gap-24 font-bold border-2 border-[#0BE58A] m-2 p-4 rounded-xl shadow-2xl'>
                  <h3>{recipe_name}</h3>
                  <h3>{reparing_time} Min</h3>
                  <h3>{Calories} Calories</h3>
                  <button className='font-bold border-2 bg-[#0BE58A] m-3 p-3 rounded-xl shadow-2xl'>Prepering</button>
                </div>
        </div>
    );
};
Fooods.propTypes={
    foodBook: PropTypes.object.isRequired,
}
export default Fooods;