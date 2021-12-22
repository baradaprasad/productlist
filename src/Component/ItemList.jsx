import React from 'react'

export default function ItemList() {
    return (
        <div>
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Pant</td>
                            <td>1700</td>
                            <td><button>Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Shirt</td>
                        <td>1200</td>
                        <td><button>Delete</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Cap</td>
                        <td>500</td>
                        <td><button>Delete</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Shoes</td>
                        <td>2000</td>
                        <td><button>Delete</button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>SunGlass</td>
                        <td>750</td>
                        <td><button>Delete</button></td>
                    </tr>
                 </tbody>

            </table>   
            </>
        </div>
    )
}
