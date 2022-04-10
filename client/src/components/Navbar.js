import '../css/Navbar.css'
function Navbar()
{
    return(
        <>
        <nav className="navbar">
           <div className='matchIT'>
            <a href={'#'}>matchIT</a>
            </div> 
            <div className='options'>
            <a href={'#'} >about</a>
            <a href={'#'}>contact us</a>   
            </div> 
        </nav>
        </>
    )
}
export default Navbar;