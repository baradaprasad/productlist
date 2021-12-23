import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
export default function Signup() {

    const [user, setUser] = useState({ fname: '', lname: '', email: '', password: '' });
    const history = useHistory();

    const onChangeFname = (event) => {
        setUser(prv => {
            return {
                ...prv, fname: event.target.value
            }
        })
    }
    const onChangeLname = (event) => {
        setUser(prv => {
            return {
                ...prv, lname: event.target.value
            }
        })
    }
    const onChangeEmail = (event) => {
        setUser(prv => {
            return {
                ...prv, email: event.target.value
            }
        })
    }
    const onChangePassword = (event) => {
        setUser(prv => {
            return {
                ...prv, password: event.target.value
            }
        })
    }
    const submitLogin = () => {
        console.log("user", user)

        history.push("/login")
    }
    const clickSignUp = () => {
        if(!user.email.trim()|| !user.password.trim()|| !user.fname.trim()|| !user.lname.trim()){
            alert('Enter Valid Name, Email and password')
            return;
        }
        const strUsers = localStorage.getItem("product-users");
        let userList = [];
        if (strUsers) {
            userList = JSON.parse(strUsers);
        }
        userList.push(user)
        localStorage.setItem("product-users", JSON.stringify(userList));
        history.push("/login")
    }


    return (
        <div  className='container '>
            <div>
                <h1>SignUp Here</h1>
            </div>
            <div>
                <label style={{display:'block'}}><b>First Name</b></label>
                <input className='width100' type="text" onChange={onChangeFname} value={user.fname}></input>

            </div><br />
            <div>
                <label style={{display:'block'}}><b>Last Name</b></label>
                <input className='width100' type="text" onChange={onChangeLname} value={user.lname}></input>
            </div><br />
            <div>
                <label style={{display:'block'}}><b>Email</b></label>
                <input className='width100' type="email" onChange={onChangeEmail} value={user.email}></input>
            </div><br />
            <div>
                <label style={{display:'block'}}><b>Password</b></label>
                <input className='width100' type="password" onChange={onChangePassword} value={user.password}></input>
            </div><br />
            <div>
                <button className='button btnok width100' onClick={clickSignUp}>SignUp</button>
            </div>
            <div>
                <p>Already have an account log in here </p>
                <button  className='button success width100' onClick={submitLogin}>Login</button>
            </div>
        </div>
    )
}
