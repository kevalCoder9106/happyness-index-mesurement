const Slot = (props) => {
    const {id,question,options} = props.data

    return(
        <div className="w-full p-3 shadow-md">
            <div className="ml-2 text-xl">{id + 1}) {question}</div>
            {
                options.map(opt => {
                    return(
                        <div className="w-1/6 m-5 p-1 rounded shadow-lg bg-sub-bg flex flex-row items-center justify-between">
                            <div className="text-lg">{opt.opt}</div>
                            <input id='opt' type='radio' name={id} value={opt.mark} className=''></input>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slot