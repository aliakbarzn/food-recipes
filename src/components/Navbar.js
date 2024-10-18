
import { Link } from 'react-router-dom'
import './Navbar.css'
import Searchbar from '../components/Searchbar'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <Link to='/' className='brand'><h1>food recipes by aliakbar</h1></Link>
                <Searchbar />
                <Link to='/create'>create recipe</Link>
            </nav>
        </div>
    )
}

export default Navbar