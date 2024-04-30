import './BTN.css'
function BTN() {


    return (
        <>
            <div id="BTN-Container" className=' flex justify-evenly items-center w-[28vw] h-[11vh]'>
                <button id='btn1' className=' BTN w-[16vw] h-[9vh] text-[#fff] bg-[#66e4e3] text-[1vw] '><a href="" className='btn-headline'>Watch Now</a></button>
                <button id='btn2' className=' BTN w-[10vw] h-[8vh] text-[#fff] bg-[#ffffff00] text-[1vw] '><a href="" className='btn-headline1'>Trailer</a></button>
            </div>
        </>
    )
}

export default BTN