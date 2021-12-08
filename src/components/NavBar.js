import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
   return (
      <div className="navbar">
         <nav>
            <Link className="brand" to="/">
               <h1>Nimble Cook</h1>
            </Link>
            <Link to="/create">Create Recipe</Link>
         </nav>
      </div>
   );
}
