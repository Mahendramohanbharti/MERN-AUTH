
import React ,{useState} from 'react'
 
function Register(){

    const[name,setname]=useState('')
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')

    function register(event){
        event.preventDefault()

        var user={
            name:name,
            username:username,
            password:password
        }

        console.log(user)

    }
    return (<div>

        <h1>Register</h1>

        <form onSubmit={register}>

        <input type="text" placeholder="name" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <input type="text" placeholder="username" className="form-control" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        <input type="password" placeholder="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        <input type="submit" value="Register" className="btn btn-primary"/>

        </form>
    </div>)
}
export default Register;