
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("item Removed");
  }

  return (
    <div >
      <div className="flex gap-14 mt-10">
        <div className="w-[180px]">
          <img src={item.image} className="w-full h-full"/>
        </div>
        <div className="max-w-[350px] ">
          <h1 className="text-gray-700 font-semibold text-lg mb-6 text-left">{item.title}</h1>
          <h1 className="text-gray-600 font-normal text-[15px] mb-6 text-left">{item.description.split(" ").slice(0,15).join(" ") + "..." }</h1>
          
          {/* price and delete btn */}
          <div className="flex justify-between items-center">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div 
              className="mr-2 bg-red-500"
              onClick={removeFromCart}>
              <FcDeleteDatabase size={25}/>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full h-[2px] bg-black mt-6">

      </div>
    </div>
  );
};

export default CartItem;
