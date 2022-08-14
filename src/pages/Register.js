import { useState } from "react"

const Register = () => {
    const [username,updateUsername] = useState('')
    const [email,updateEmail] = useState('')
    const [password,updatePassword] = useState('')

    const role = localStorage.getItem('role')

    const onRegisterHandler = () => {
        console.log('registering')
        const userData = {username:username,email:email,password:password,role:role}
        
        fetch('http://localhost:3005/register',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        .then(resp => resp.json())
        .then(r => console.log(r))
        .catch(err => console.log(err))
    }

    return(
        <div className="w-full h-full bg-bg flex flex-row items-center justify-center">
            <div className='w-1/4 h-3/5 flex flex-col justify-start items-center bg-bg shadow-xl rounded-lg'>
                <div className='mt-5 text-2xl font-bold'>Register</div>
                <input type='text' placeholder='Email' onChange={e => updateEmail(e.target.value)} className='mt-8 p-1 w-3/4 bg-sub-bg rounded text-lg'></input>
                <input type='text' placeholder='Username' onChange={e => updateUsername(e.target.value)} className='mt-4 p-1 w-3/4 bg-sub-bg rounded text-lg'></input>
                <input type='password' placeholder='Password' onChange={e => updatePassword(e.target.value)} className='mt-4 p-1 w-3/4 bg-sub-bg rounded text-lg'></input>
                <button onClick={onRegisterHandler} className='p-2 mt-5 text-lg rounded bg-button shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75'>Register</button>
                <div className="w-full mt-5 flex items-center">
                    <div className="text-sm ml-2 text-gray-600">Already user? <a href="/login" className="text-blue-500 cursor-pointer">Login</a></div>
                </div>
            </div>
        </div>
    )
}

export default Register