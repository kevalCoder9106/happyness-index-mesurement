import student_btn from '../res/student.png'
import teacher_btn from '../res/teacher.png'

const BasePage = (props) => {
    const roleHandler = (role) => {
        localStorage.setItem('role',role)
        window.location.href = '/login'
        props.updateRole(role)
    }

    const quotes = { 
        q: "'The man who does not read books has no advantage over the one who cannot read them.' ", 
        aut: "— Mark Twain" 
    }

    return(
        <div className="w-full h-full bg-bg">
            <div className="w-full p-5 flex flex-row justify-around">
                <button onClick={() => roleHandler('STUDENT')} className='w-2/5 h-full flex flex-col items-center shadow-md border-none rounded-xl hover:shadow-2xl active:shadow-sm transition-all delay-75'>
                    <img src={student_btn} className='sm:w-52 sm:h-40 2xl:w-96 2xl:h-72'></img>
                    <div className='text-xl font-bold m-3'>I'm a Student</div>
                </button>
                <button onClick={() => roleHandler('TEACHER')} className='w-2/5 h-full flex flex-col items-center shadow-md border-none rounded-xl hover:shadow-2xl active:shadow-sm transition-all delay-75'>
                    <img src={teacher_btn} className='sm:w-40 sm:h-40 2xl:w-72 2xl:h-72'></img>
                    <div className='text-xl font-bold m-3'>I'm a Teacher</div>
                </button>
            </div>
            <div className='w-full p-5 mt-9 text-sm lg:text-lg 2xl:text-2xl font-bold text-gray-600 flex justify-center'>{quotes.q} <br /> {quotes.aut}</div>
        </div>
    )
}

export default BasePage