const videoTitle = ({mainMovie}) => {
    const {title , overview, id } = mainMovie
    return (
        <div className="w-screen aspect-video pt-72 px-12 absolute text-white bg-gradient-to-r from-black"> 
            <h1 className="font-bold text-6xl w-1/2"> {title} </h1>
            <p className="py-6 w-1/2"> {overview} </p>
            <div className="">
                <button className="px-6 bg-white p-3 rounded-lg text-white bg-opacity-50 hover:bg-opacity-60"> ► Play</button>
                <button className="px-6 p-3 mx-2 bg-gray-500 rounded-lg text-white bg-opacity-50"> More info </button>
            </div>
        </div>
    )
}

export default videoTitle;