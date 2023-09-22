import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className="">
    {
      cart.length > 0 ?
      (<div className="flex max-w-6xl mx-auto gap-24 ">
        <div>
          {
            cart.map( (item,index) => (<CartItem key={item.id} item={item} itemIndex={index}/>))
          }
        </div>

        <div className="flex h-[500px] flex-col justify-between  mt-28">
          <div >
            <div className=" text-green-700 text-xl uppercase tracking-tighter font-semibold">Your Cart</div>
            <div className="text-green-700 text-4xl uppercase font-bold">Summary</div>
            <p className="mt-4 font-semibold">
              <span>Total Items: {cart.length}</span>
            </p>
          </div>

          <div>
            <p className="text-gray-700 font-semibold text-lg text-left">Total Amount:<span className="font-bold">${totalAmount}</span> </p>
            <button className="bg-green-700 text-white px-28 py-2 font-bold rounded-md mt-3" >
              Checkout Now
            </button>
          </div>
        </div>


      </div>) :
      (<div className=" w-full h-[70vh] flex space-y- flex-col justify-center items-center  ">
        <h1 className="">Your cart is empty</h1>
        <Link to={"/"}>
          <button 
            className="bg-green-700 text-white px-28 py-2 font-bold rounded-md
              ">
            Shop Now
          </button>
        </Link>
      </div>)
    }

    </div>
  );
};

export default Cart;
