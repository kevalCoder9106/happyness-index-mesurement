import student_img from '../res/student_page/student.png'

import NavBar from './NavBar'


const StudentPage = () => {
    return(
        <div className="w-full h-full bg-bg flex items-center flex-col">
            <div className='w-full h-nav'><NavBar home='student' room='student'/></div>
            <div className="w-full h-3/4 p-5 flex flex-row justify-between items-center">
                <div className="w-3/5 text-5xl font-bold">Welcome, {localStorage.getItem('username_student')}.</div>
                <div className='w-2/5'>
                    <img src={student_img} className='w-3/4 h-3/4'></img>
                </div>
            </div>
            <div>Join a room now, <a href='/joinroom' className='text-blue-500'>here</a></div>
        </div>
    )
}

export default StudentPage