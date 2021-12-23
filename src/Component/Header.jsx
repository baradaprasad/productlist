import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Header() {
    const history=useHistory();
    const onLogOut=()=>{
        localStorage.removeItem('product')
        history.replace('/login')
    }
    return (
        <>
            <div className="topnav">
                <h2 style={{flex:1}}>Dashboard</h2>
                <button className='button btnok' style={{}} onClick={onLogOut}>Logout</button>
              
               
            </div>
           
        </>
    )
}
