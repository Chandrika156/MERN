import '../index.css'
import {Link} from 'react-router-dom'
export default function Header(){
    return(
        <div class="header">
            <h3>FlipKart</h3>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Register">Register</Link></li>
            <li><Link to="/Feedback">Feedback</Link></li>
            </ul>
    </div>
 
 
 )
}