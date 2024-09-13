import { Link } from 'react-router-dom'
const Navbar= () => {
   
    return (
        <>
            <ul className="main-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
            </ul>
        </>
    )
}

export default Navbar