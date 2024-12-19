
import { useState } from 'react'
import './App.css'
import Cart2 from './component/cartSection/cart2'
// import Cart from './component/cartSection/Cart'
import Banner from './component/cover/Banner'
import Food from './component/foodItem/food'
import Header from './component/header/Header'
import Our from './component/our/Our'
import Cooking from './component/readingTime/Cooking'

function App() {
  const [foodBookin, setFoodBooking] = useState([])
  // const [prepering, setPrepering] = useState([])

  const handelAddToFoodBooking = (food) => {
    // const newFoodBooking = [...foodBookin, food]
    // setFoodBooking(newFoodBooking);
    const isExist = foodBookin.find(foods => foods.recipe_id=== food.recipe_id);
    if (!isExist) {
      setFoodBooking([...foodBookin, food]);
    }
    else {
      alert("All is not for good")
    }
  }

  // const handleAddToprepering = (time) => {
  //   console.log('se amr', time)
  // }


  return (
    <>
      <div className='lexend-uniquifier'>
        <Header></Header>
        <Banner></Banner>
        <Our></Our>
        {/* <Cart></Cart> */}
        <div className='flex justify-around'>
          <Cart2 handelAddToFoodBooking={handelAddToFoodBooking}></Cart2>
          <Food
            foodBookin={foodBookin}
            // handleAddToprepering={handleAddToprepering}
          ></Food>
         
        </div>
        <Cooking></Cooking>
      </div>
    </>
  )
}

export default App
