//app clicking parts
import React,{useState} from "react";

function App(){

    const[name, setName]=useState("Guest");
    const[quantity, setQuantity]=useState(5);
    const[payment, setPayment]=useState("");


    const[shipping,setShipping]=useState("");



   function handleNameChange(event){
    setName(event.target.value);}


   function handleQuantityChange(event){
    setQuantity(event.target.value);}

    function handlePayment(event){
        setPayment(event.target.value);}


function handleShipping(event){
    setShipping(event.target.value);
}


    return(<div>
        <input value={name} onChange={handleNameChange}/>
<p>Name : {name}</p>

<input value ={quantity} onChange={handleQuantityChange} type="number"/>

<p>Qunatity : {quantity}</p>






<select value={payment}onChange={handlePayment}>
    <option value=" "> Select an option</option>
    <option value="visa"> Visa</option>
    <option value="master"> Master</option>
    <option value="giftcard"> Giftcard</option>

</select>

<p> Payment: {payment}</p>


<label>
    <input type="radio" value="Pickup"
    checked={ shipping === "Pickup"}
    onChange={handleShipping}/>
    Pickup
</label>
<br></br>
<label>
    <input type="radio" value="delivery"
    checked={shipping ==="delivery"}
    onChange={handleShipping}/>
    Delivery
</label>
<p> Shipping method : {shipping}</p>

    </div>);


}
export default App