import React ,{useState} from 'react'
 
function Login(){

    
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')

    function login(event){
        event.preventDefault()

        var user={
            
            username:username,
            password:password
        }

        console.log(user)

    }
    return (<div>

        

        <form onSubmit={login}>

        <h1>Login</h1>
        <input type="text" placeholder="username" className="form-control" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        <input type="password" placeholder="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        <input type="submit" value="Login" className="btn btn-primary"/>

        </form>
    </div>)
}
export default Login;