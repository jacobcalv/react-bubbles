import React, {useState} from "react";
import api from '../utils/api'

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
		api()
			.post("/api/login", data)
			.then(result => {
        localStorage.setItem("token", result.data.payload)
        //if there is success the token is stored in local storage
				props.history.push("/account")
			})
			.catch(err => {
        setError(err.response.data.message)
			})
	}
	
	return (
		<form onSubmit={handleSubmit}>
			{error && <p className="error">{error}</p>}

			<input type="username" name="username" placeholder="Username" value={data.username} onChange={handleChange} />
			<input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

			<button type="submit">Sign In</button>
		</form>
	)
}

export default Login;
