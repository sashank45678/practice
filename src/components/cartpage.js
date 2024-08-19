
import { clearCart } from "./cartslice"
import ItemList from "./itemList"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
const Cart=()=>{
    const dispatch=useDispatch();
    const cartitems=useSelector((store)=>{
        return store.cart.items
    })
const handleclearcart=()=>{
dispatch(clearCart());
}
return <div className="text-center p-5 m-5">
    <h1 className="font-bold text-2xl">Cart</h1>
    <button className="m-2 p-1 bg-black text-white text-xl rounded-lg" onClick={handleclearcart}>Clear Cart</button>
    <div className="w-6/12 m-auto"><ItemList items={cartitems} flag={true}/></div>
    {cartitems.length==0 && (<h1>Card is Empty.Add items to the Cart!</h1>)}
</div>
}
export default Cart;