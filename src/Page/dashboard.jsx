import React, { Component } from 'react'
import Header from '../Component/Header'
import ItemList from '../Component/ItemList'



export default function Dashboard() {
    return (
        <>
        <Header />
        <div style={{padding:24}}>
        <ItemList />  
        
        
        </div>
          
       </>
    )
}
