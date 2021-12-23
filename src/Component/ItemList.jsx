import React, { useState, useMemo } from 'react'

// import { ReactComponent as SearchIcon } from '../search.svg';
import Additem from '../Component/Additem'
import { connect } from 'react-redux';
import { deleteItem } from './Redux/itemAction';
import Pagingnation from '../Component/Pagingnation'

function ItemList({ items, onDelete }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, onSearchText] = useState("");
    const [sort, setSort] = useState("A")
    const onSearchChange = (event) => {
        onSearchText(event.target.value)
    }
    const onSortChange = (event) => {
        setSort(event.target.value);
    }
    const list = useMemo(() => {
        let arr = [];
        if (searchText) {
            arr = items.filter((eachItem) => {
                if (eachItem.name.toLowerCase().search(searchText.toLowerCase()) > -1) {
                    return true;
                }
                return false
            })
        }else arr = items;


        if (sort === "B") {
            arr = arr.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sort === "C") {
            arr = arr.sort((a, b) => b.name.localeCompare(a.name))
        }else if(sort === "A"){
            arr = arr.sort((a, b) => a.id - b.id);
        }
        return arr;

    }, [searchText, items, sort])
    return (
        <>
            <div>
                <>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 10
                    }}>
                        <input placeholder="Search" onChange={onSearchChange} style={{ marginRight: 10 }}  ></input>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <h3>Sort</h3> &nbsp;&nbsp;
                            <select value={sort} onChange={onSortChange}>
                                <option value="A">None</option>
                                <option value="B">A-Z</option>
                                <option value="C">Z-A</option>

                            </select>
                        </div>
                    </div>
                    <Additem />
                    <table id="custome-table">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        {!list.length ? null : <tbody>
                            {list.map((eachItem, index) => {
                                if ((currentPage * 5) >= (index + 1) && ((currentPage - 1) * 5) < (index + 1)) {
                                    return (
                                        <tr key={eachItem.id}>
                                            <td>{eachItem.id}</td>
                                            <td>{eachItem.name}</td>
                                            <td>{eachItem.price}</td>
                                            <td><button onClick={() => onDelete(eachItem.id)} className='button secondary'>Delete</button></td>
                                        </tr>
                                    )
                                } else return null;

                            })}
                        </tbody>}

                    </table>
                    {!list.length ? <h2>No Items</h2> : null}
                </>
            </div>
            {list.length > 5 ? <Pagingnation currentPage={currentPage} totalItem={list.length} setCurrentPage
                ={setCurrentPage} /> : null}
        </>
    )
}

const mapStateToProps = (state, ownProps) => ({
    items: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    // onClick: (item) => dispatch(addItem(item))
    onDelete: (id) => dispatch(deleteItem(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ItemList)