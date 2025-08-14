import { Link } from 'react-router';
import tokenTrackLogo from '../assets/tokentrack.png';
const Header = () => {
    return (
        <div className="top-nav">
            <div className="header-logo">
                <img src={tokenTrackLogo} alt="logo" className="logo"></img>
                <h1>TokenTrack</h1>              
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
};

export default Header;