import student_img from '../res/student_page/student.png'

import NavBar from './NavBar'

function TeacherPage(){
    return(
        <div className="w-full h-full bg-bg flex items-center flex-col">
            <div className='w-full h-nav'><NavBar room='roomlist'/></div>
            <div className="w-full h-3/4 p-5 flex flex-row justify-between items-center">
                <div className="w-3/5 text-5xl font-bold">Welcome, Keval.</div>
                <div className='w-2/5'>
                    <img src={student_img} className='w-3/4 h-3/4'></img>
                </div>
            </div>
            <div>Create a room now, <a href='/createroom' className='text-blue-500'>here</a></div>
        </div>
    )
}

export default TeacherPage