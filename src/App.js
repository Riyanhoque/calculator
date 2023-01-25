import React, {useState} from "react";
import {MdEuro} from "react-icons/md";
import "./index.css"
import { format, compareAsc } from 'date-fns'

function App() {
  
  const[ cartvalue, setCartvalue] = useState('')
  const[ distance, setDistance] = useState('')
  const[ items, setItems] = useState('')
  const[ time, setTime] = useState('')
  const[ cal, setCal] = useState('')

 const date = new Date();
 console.log(date);

  let calcuwolt = (event) =>{
    event.preventDefault()
   

   if (cartvalue <= 10) {
   let cartvalues = 10 - cartvalue
    if (distance <= 1000) {
     // setCal (cartvalues + 2  )
    }else {
        var distances = (Math.ceil (distance/ 500))

       for (let i = 0; i <= distances; i++ ) {
        var distancevalue = i 
      // setCal( distancevalue + cartvalues) 
      }
    } 

    if (items <= 4) {
      let itemsvalue  = 0
      setCal( +distancevalue + cartvalues + itemsvalue ) 
     }else if (items <= 12) {
      let itemsvalue = ((items-4) *.50)
      setCal( distancevalue + cartvalues + itemsvalue ) 
     }else{
      let itemsvalue = (((items - 4) * .50) + 1.2)
      setCal( distancevalue + cartvalues + itemsvalue ) 
     }

   }
}


  return (
    <div className="app">
    <div className="container">
    <h2 className="center"> Calculator </h2>

    <form onSubmit={calcuwolt}>
      <div className="cardvalue">
        <label>cart value</label>
        <input value={cartvalue} onChange = {(event) => setCartvalue(event.target.value)} ></input> <MdEuro className="euro"/>
      </div>
    
      <div className="cardvalue">
        <label>Delivery distance</label>
        <input value={distance} onChange = {(event) => setDistance(event.target.value)}></input> <p className="euro">m</p>
      </div>
      <div>
        <label>Amount of items</label>
        <input value={items} onChange = {(event) => setItems(event.target.value)}></input>
      </div>
      <div>
        <label>Time</label>
        <input value={time} type= "datetime-local" onChange = {(event) => setTime(event.target.value)}></input>
      </div>
      <div>
        <button className = 'btn' type='submit'>volt Calculator</button>
      </div>
    </form>

    <div className="center">
      <h3> Delivery Price: {cal}</h3>
    </div>
    </div>
    </div>
  );
}

export default App;
