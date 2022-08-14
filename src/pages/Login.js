import { useState } from "react"

const Login = (props) => {
    const [username,updateUsername] = useState('')
    const [password,updatePassword] = useState('')

    const role = localStorage.getItem('role')
    const onLoginHandler = () => {
        const userData = {username:username,password:password,role:role}
        
        fetch('http://localhost:3005/login',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        .then(resp => resp.json())
        .then(r => {
            if (r.length <= 0){
                alert('Invalid user creds!')
            }
            else{
                if (role === 'STUDENT'){
                    localStorage.setItem('username_student',username)
                    window.location.href = '/student'
                }
                else{
                    localStorage.setItem('username_teacher',username)
                    window.location.href = '/teacherpage'
                }
            }
        })
    }
    return(
        <div className="w-full h-full bg-sub-bg flex flex-row items-center justify-center">
            <div className='w-1/4 h-1/2 flex flex-col justify-start items-center bg-bg shadow-xl rounded-lg'>
                <div className='mt-5 text-2xl font-bold'>Login</div>
                <input type='text' placeholder='Username' onChange={e => updateUsername(e.target.value)} className='mt-8 p-1 w-3/4 bg-bg rounded text-lg'></input>
                <input type='password' placeholder='Password' onChange={e => updatePassword(e.target.value)} className='mt-4 p-1 w-3/4 bg-bg rounded text-lg'></input>
                <button onClick={onLoginHandler} className='p-2 mt-5 text-lg rounded bg-button shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75 rounded hover:rounded-lg"'>Login</button>
                <div className="w-full mt-5 flex items-center">
                    <div className="text-sm ml-2 text-gray-600">New user? <a href="/register" className="text-blue-500 cursor-pointer">Register</a></div>
                </div>
            </div>
        </div>
    )
}

export default Login