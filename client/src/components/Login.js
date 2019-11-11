import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth'
import '../login.css'
import styled from 'styled-components'

const Login = (props) => {
  const [error, setError] = useState()
  //State for user login data
	const [data, setData] = useState({
		username: "",
		password: "",
	})
  
  //On Change the data will be stored in state-
	const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
	}


	const handleSubmit = (event) => {
		event.preventDefault()
    //since I set up the API in the utils folder I can call it here and give it the path of the login
		axiosWithAuth()
			.post("/api/login", data)
			.then(result => {
        localStorage.setItem("token", result.data.payload)
        //if there is success the token is stored in local storage
				props.history.push("/bubblepage")
			})
			.catch(err => {
        setError(err.response.data.message)
			})
	}
  
  const Header = styled.h1`
    color: white;
    font-size: 3rem
  `

	return (
    <div className='container'>
      <Header>Bubbles!!!</Header>
      <form className='reg' onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}

          <label>Username</label>
          <input type="username" name="username" placeholder="Username" value={data.username} onChange={handleChange} />

        

          <label>Password</label>
          <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

        <button className='submit' type="submit">Sign In</button>
      </form>
    </div>
	)
}

export default Login;
