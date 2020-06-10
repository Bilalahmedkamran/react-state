import React,{useState} from 'react'


function Room(){
    let [light,setlight]=useState(false)
    let [temp,setTemp]=useState(22)



    return(
        <div>
            <br/>
            The light is {light ?"ON" : "OFF" }
            <br/>
            <br/>
            Current temperature = {temp + " degrees celcius"}
        <br/>
        <br/>
        Turn the Light on and off from here: <br/> 
        <button onClick={()=> setlight(light=true) }>ON</button> <button onClick={()=> setlight(light=false)}>OFF</button>
        <br/>
        <br/>
           Set the temperature from here: <br/>
        <button onClick={()=> setTemp(temp=temp+1)}>+</button>  <button onClick={()=> setTemp(temp=temp-1)}>-</button>
        
        
        </div>
    );
}
export default Room;