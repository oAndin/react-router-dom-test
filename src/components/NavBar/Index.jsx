import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <header>
                <h1>Header</h1>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/contact'>Contatos</Link>
                </nav>
            </header>
        </>
    );
};

export default NavBar;