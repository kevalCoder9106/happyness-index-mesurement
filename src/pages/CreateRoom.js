import { useCallback, useState } from "react"
import { useSearchParams } from "react-router-dom"
import NavBar from "./NavBar"

function CreateRoom(){
    const [roomCreated,setRoomCreated] = useState(false)
    const [roomName,updateRoomName] = useState('')
    var room_code = '5555'

    const generateRoomCode = () => {
        return (Math.floor(Math.random() * 90000) + 10000).toString();
    }

    const username_teacher = localStorage.getItem('username_teacher')

    const onCreateRoomHandler = () => {
        fetch('http://localhost:3005/createroom',{
            method: 'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({room_name:roomName,room_code:generateRoomCode(),username: username_teacher})
        })
        .then(resp => resp.json())
        .then(console.log)

        setRoomCreated(true)
    }

    const continueHandler = () => {
        window.location.href = '/teacherpage'
    }

    return(
        <div className='w-full h-full bg-bg flex flex-col items-center justify-center'>
            <input type='text' onChange={e => updateRoomName(e.target.value)} placeholder="Room Name" className="p-2 text-2xl rounded bg-bg shadow-inner shadow-black"></input>
            <button onClick={onCreateRoomHandler} className='peer p-2 mt-5 pl-4 pr-4 text-lg rounded bg-button shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75'>Create</button>
            {
                roomCreated === true
                ?
                    <div className="flex flex-row items-center justify-center">
                        <div className="mt-9 m-2 text-2xl">Code</div>
                        <button onClick={continueHandler} className='peer p-2 mt-5 pl-4 pr-4 text-lg rounded bg-button shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75'>Continue</button>
                    </div>
                :
                    console.log()
            }
        </div>
    )
}

export default CreateRoom