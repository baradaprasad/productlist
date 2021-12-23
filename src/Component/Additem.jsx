import React from 'react'
import { useState } from 'react';
import { addItem } from './Redux/itemAction';
import { connect } from 'react-redux';

const initialItemState={ name: '', price: '' }

function Additem(props) {
    const [item,setItem] = useState(initialItemState);
   
    const onChangeName = (event) => {
        setItem(prv => {
            return {
                ...prv, name: event.target.value
            }
        })
    }
    const onChangePrice = (event) => {
        setItem(prv => {
            return {
                ...prv, price: event.target.value
            }
        })
    }
    const onAdd=()=>{
        if(item.name.trim()&&item.price.trim()){
            props.onAddItem(item);
        setItem(initialItemState);
        }else{
            alert('Please enter Name and Price correctly')
        }
 
    }
    return (
       
             <div style={{border:"1px solid black",marginBottom:10,padding:10}}>
              <h2>Add Item</h2>
             <div style={{display:'flex'}}>
             <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      paddingRight:10
              }}>
                  <label >NAME</label>
                  <input type="text" onChange={ onChangeName} value={item.name}></input>
                  </div> 
              <div  style={{
                      display: 'flex',
                      flexDirection: 'column'
              }}>
                  <label >PRICE</label>
                  <input type="number" onChange={onChangePrice} value={item.price}></input>
                  </div>
             </div>
                  <button className='button primary' onClick={onAdd}>Add Item</button> 
            </div>
        
    )
}
const mapDispatchToProps = (dispatch, ownProps) => ({
     onAddItem: (id) => dispatch(addItem(id)),
})


export default connect(null,mapDispatchToProps)(Additem)
