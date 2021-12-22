import React, { Component } from 'react'
import Header from '../Component/Header'
import ItemList from '../Component/ItemList'
import Pagingnation from '../Component/Pagingnation'
import Additem from '../Component/Additem'

export default function Dashboard() {
    return (
        <>
        <Header />
        <ItemList />  
        <Pagingnation />
        <Additem />  
       </>
    )
}
