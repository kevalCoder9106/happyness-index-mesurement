import { useState } from "react";
import question from "../packages/questions";
import Slot from "./component/Slot";

const Form = (props) => {
    const [name,updateName] = useState("")

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const opts = document.querySelectorAll('[id=opt]')
        // const data = {username:username,room_code:roomCode,h_index:hi}
        
        var hi = 0;

        for(let i = 0; i < opts.length; i++){
            if(opts[i].checked === true){
                hi += parseInt(opts[i].value)
            }
        }
        
        // fetch('http://localhost:3005/joinroom',{
        //     method:'post',
        //     headers:{'Content-Type':'application/json',
        //     'Access-Control-Allow-Headers' : '*'},
        //     body:JSON.stringify(data)
        // })
        // .then(resp => {
        //     resp.json()
        //     console.log(data)
        // }
        // )
        // .then(console.log())
        // .catch(err => console.log(err))

        console.log(name)

        fetch('https://vast-fjord-23138.herokuapp.com/insert',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name: name, result: hi})
        })
        .then(resp => resp.json())
        .then(res => console.log(res))

        localStorage.setItem('hIndex',hi)
        props.updateHappinessIndex(hi.toString())

        alert("Your happyness index is " + hi + "%")
    }

    return(
        <div className="w-full h-full">
            <div className="w-full p-3 shadow-md">
                <input type='text' plac eholder="Name" onChange={e => updateName(e.target.value)}></input>
            </div>
        {
            question.map(que => {
                return <Slot data={que}/>
            })
        }
            <div className="w-full flex justify-end">
                <button onClick={e => formSubmitHandler(e)} className='p-2 mb-5 mr-5 mt-5 pl-4 pr-4 text-lg rounded bg-button shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75'>Submit</button>
            </div>
        </div>
    )
}

export default Form