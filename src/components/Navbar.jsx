import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="bg-teal-700 text-white p-4 shadow-md">
            <ul className="flex gap-4 justify-end">
                <li className="hover:scale-125">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:scale-125">
                    <Link to="/owner">Owner</Link>
                </li>
            </ul>
        </nav>
    )
}