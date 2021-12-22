import React from 'react'
import { ReactComponent as SearchIcon } from '../search.svg';
export default function Header() {
    return (
        <>
            <div>
                <h1>Dashboard</h1>
            </div>
            <div>
                <input placeholder="Search"></input>
                <span><SearchIcon /></span>
            </div>
            <button>AddItem</button>
            <div>
                <h3>Sort</h3>
                <select name="" id="">
                    <option value="">A-Z</option>
                    <option value="">Z-A</option>

                </select>
            </div>
            </>
    )        
}
