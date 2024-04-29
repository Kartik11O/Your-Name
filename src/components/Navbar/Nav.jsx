import './navbar.css'
function Nav() {
    return (
        <>
            <nav id='NavBar'>
                <div id="box1">
                    <h2>Most Popular</h2>
                    <h2>Moives</h2>
                    <h2>TV Series</h2>
                </div>
                <div id="box2" className='flex'><h1>Chainsaw.to</h1></div>
                <div id="box3"> <span id='search' className='flex'></span> <span id='bell' className='flex'></span> <h2> Login</h2></div>
            </nav>
        </>
    )


}

export default Nav