const ResultPage = (props) => {
    const hIndex = localStorage.getItem('hIndex')

    const backHandler = () => {
        window.location.href = '/'
    }
    
    return(
        <div className="w-full h-full bg-bg flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-bg shadow-lg rounded-lg flex items-center justify-center flex-col">
                <div className="text-2xl font-bold">Your happiness index is {hIndex}%!</div>
                <button onClick={backHandler} className='p-2 mt-5 pl-4 pr-4 text-lg rounded bg-button shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75'>Continue</button>
            </div>
        </div>

    )
}

export default ResultPage