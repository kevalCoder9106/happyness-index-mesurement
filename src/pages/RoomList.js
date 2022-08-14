import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const RoomList = () => {
    const username = localStorage.getItem('username_teacher')
    const [roomList,setRoomList] = useState('')

    const getRoomsList = () => {
        fetch('http://localhost:3005/roomlist',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username:username})
        })
        .then(resp => resp.json())
        .then(r => setRoomList(r))
    }

    const continueHandler = () => {
        window.location.href = '/teacherpage'
    }

    useEffect(() => {
        if (roomList === ''){
            getRoomsList()
            console.log(roomList)
        }
    })

    return(
        <div className="w-full h-full bg-bg flex flex-col">
            {
                roomList
                ?
                    roomList.map(r => {
                        return(
                            <div className="w-3/4 m-2 p-2 flex flex-col justify-between bg-bg shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75 cursor-pointer">
                                <div className="m-2 text-2xl text-gray-900">Room name: {r.room_name}</div>
                                <div className="m-2 text-lg text-gray-500">Room code: {r.room_code}</div>
                                <div className="m-2 text-lg text-gray-500">Total students: 9</div>
                            </div>
                        )
                    })
                :
                    console.log()
            }
            <div>
            <button onClick={continueHandler} className='m-5 peer p-2 mt-5 pl-4 pr-4 text-lg rounded bg-button shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75'>Continue</button>

            </div>
        </div>
    )
}

export default RoomList