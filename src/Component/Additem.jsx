import React from 'react'

export default function Additem() {
    return (
       
             <div style={{border:"1px solid black"}}>
              <h2>Add Item</h2>
              <span>
                  <label >NAME</label>
                  <input type="text"></input>
                  </span><br/>  
              <span>
                  <label >PRICE</label>
                  <input type="number"></input>
                  </span><br/> 
                  <button>Add</button> 
            </div>
        
    )
}
