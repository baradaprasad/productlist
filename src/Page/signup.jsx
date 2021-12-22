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
        <div>
            <div>
                <h1>SignUp Here</h1>
            </div>
            <div>
                <label>First Name</label>
                <input type="text" onChange={onChangeFname} value={user.fname}></input>

            </div><br />
            <div>
                <label>Last Name</label>
                <input type="text" onChange={onChangeLname} value={user.lname}></input>
            </div><br />
            <div>
                <label>Email</label>
                <input type="email" onChange={onChangeEmail} value={user.email}></input>
            </div><br />
            <div>
                <label>Password</label>
                <input type="password" onChange={onChangePassword} value={user.password}></input>
            </div><br />
            <div>
                <button onClick={clickSignUp}>SignUp</button>
            </div>
            <div>
                <p>Already have an account log in here </p>
                <button onClick={submitLogin}>Login</button>
            </div>
        </div>
    )
}
