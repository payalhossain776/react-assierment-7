import { useEffect, useState } from "react";
import Cart3 from "./Cart3";
import PropTypes from 'prop-types';
const Cart2 = ({handelAddToFoodBooking}) => {
    const [chinken, setChinken] = useState([])
    

    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setChinken(data))
    }, [])

  

    return (
        <div>
            {
                chinken.map((carts, idx) => <Cart3
                    key={idx} carts={carts}
                    handelAddToFoodBooking={handelAddToFoodBooking}
                ></Cart3>)
            }
        </div>
    );
};


Cart2.propTypes={
    handelAddToFoodBooking:PropTypes.func.isRequired
}
export default Cart2;