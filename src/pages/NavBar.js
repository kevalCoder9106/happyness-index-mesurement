const NavBar = (props) => {
    const home = '/' + props.home
    const room = '/' + props.room

    return(
        <div className="w-full h-full bg-bg shadow-md flex flex-row items-center ">
            <div className="p-2 m-2 h-full text-lg hover:bg-gray-600 hover:text-white flex items-center"><a href={home}>Home</a></div>
            <div className="p-2 m-2 h-full text-lg hover:bg-gray-600 hover:text-white flex items-center"><a href={room}>Room</a></div>
        </div>
    )
}

export default NavBar