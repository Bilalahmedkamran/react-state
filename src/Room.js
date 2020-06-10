import React,{useState} from 'react'


function Room(){
    let [light,setlight]=useState(false)
    let [temp,setTemp]=useState(22)



    return(
        <div>
            The light is {light ?"ON" : "OFF" }
            Current temperature = {temp + " degrees celcius"}
        <br/>
        <button onClick={()=> setlight(!light) }>ON</button> <button onClick={()=> setlight(light)}>OFF</button>
        <br/>
        <br/>
           Set the temperature here
        <button onClick={()=> setTemp(temp++)}>+</button>  <button onClick={()=> setTemp(temp--)}>-</button>
        
        
        </div>
    );
}
export default Room;