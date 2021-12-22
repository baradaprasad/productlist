import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Login() {

    const [user, setUser] = useState({ email: '', password: '' });
    const history = useHistory();

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
        const strUsers = localStorage.getItem("product-users");
        let userList = [];
        if (strUsers) {
            userList = JSON.parse(strUsers);
        }
        if (!userList.length) {
            alert('You have to signup before login')
        } else {
            let  currentUser = null;
            userList.forEach(element => {
                if (element.email === user.email && element.password === user.password) {
                    currentUser=element;
                }
            });
            if (currentUser) {
                localStorage.setItem('product',JSON.stringify(currentUser))
                history.push("/dashboard")
            } else {
                alert('Email Or Password is wrong')
            }


        }

    }
    const clickSignUp = () => {
        history.push("/signup")
    }


    return (
        <div>
            <div>
                <label>Email</label>
                <input type="email" onChange={onChangeEmail} value={user.email} />
            </div><br />
            <div>
                <label>Password</label>
                <input type="password" onChange={onChangePassword} value={user.password} />
            </div><br />
            <div>
                <button onClick={submitLogin}>LogIn</button>
            </div>
            <div>
                <p>If you not registred before please SignUp Here</p>
                <button onClick={clickSignUp}>SignUp</button>
            </div>
        </div>
    )
}
