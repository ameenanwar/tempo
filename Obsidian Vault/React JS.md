
# Using useState() to produce html real-time rendering
```

import {useState} from 'react';

const NewButton=()=>

{

const button={

backgroundColor:"Pink",

width:"100px",

height:"60px"

  

}

const button2={

backgroundColor:"Aqua",

width:"200px",

height:"60px",

color:"red"

  

}

const div={

backgroundColor:"yellow",

width:"300px",

height:"60px",

color:"red"

}

const input={

backgroundColor:"Aqua",

width:"200px",

height:"60px",

color:"red"

  

}

var [name,updateName]=useState("john");

var [count,setCount]=useState(0);

var [area,updatearea]=useState("nil")

var [radio,updateRadio]=useState("Delivery");

var[log,updateLog]=useState(false);

var[cart,updateCart]=useState("Nil");

var[quantity,updateQuantity]=useState(0);

var[payment,updatePayment]=useState("COD");

const update_Radio=(e)=>

{

updateRadio(e.target.value )

}

  

const update_payment=(e)=>

{

updatePayment(e.target.value )

}

const update_Quantity=()=>

{

updateQuantity(quantity++);

}

const update_cart=(e)=>

{

updateCart(e.target.value)

  

}

const increment=()=>

{

setCount(count++)

  

}

const square=()=>

{

setCount(count*count)

  

}

const decrement=()=>

{

setCount(count-1)

  

}

const update=()=>

{

updateName("Raju");

}

const log_update=()=>

{

updateLog(!log)

}

const update_Area=(e)=>

{

updatearea(e.target.value)

}

  

return(

<>

<button style={button} onClick={update}>Update Name</button>

<div>Name:{name}</div>

<button style={button} onClick={log_update}>Update Log</button>

<div>Log:{log?"yes":"no"}</div>

<button>{count}</button>

<button style={button2} onClick={increment}>Increase</button>

<button style={button2} onClick={decrement}>Decrease</button>

<button style={button2} onClick={square}>Square</button>

<input type="text" value={cart} onChange={update_cart}></input>

<div>Cart:{cart}</div>

<input type="number" value={quantity} style={input} onChange={update_Quantity}></input>

<div style={div}>{quantity}</div>

<textarea value={area} style={input} onChange={update_Area}/>

<div style={div}>{area}</div>

<div>

<select value={payment} onChange={update_payment}>

<option value="Visa">Visa</option>

<option value="Gpay">Gpay</option>

<option value="Mastercard">Mastercard</option>;

</select>

</div>

<p>Payement:{payment}</p>

<label htmlFor="del">

<input type="radio" value="Delivery" name="del" checked={radio==="Delivery"} onChange={update_Radio}>

</input>

Delivery

</label>

<label htmlFor="pick]">

<input type="radio" value="Pick-up" name="del" checked={radio==="Pick-up"} onChange={update_Radio}>

</input>

Pick

</label>

<p>{radio}</p>

  

</>

)

}

export default NewButton;
```
.onClick:for button
.onChange:for html tags
***the event*** option  is used for producing the real time rendering.


## to get the value of an input
![[Pasted image 20250703010456.png]]
.)here document.getElementById can be used for sending the input.