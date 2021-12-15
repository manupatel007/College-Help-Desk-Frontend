import "D:/collegeBuddy/collegebuddy/src/Components/ComponentStyle.css";

function Navbar() {
    return (
        <>
            <nav> 
                <div className="logo">College Book</div>
                <input type="checkbox" id="click" /> 
                <label for="click" className="menu-btn"> 
                    <i className="fas fa-bars"></i> 
                </label> 
                <ul> 
                    <li><a href="#">Home</a></li> 
                    <li><a href="#">About</a></li> 
                    <li><a href="#">Blog</a></li> 
                    <li><a href="#">FAQ</a></li> 
                    <li><a href="#">Contact Us</a></li> 
                    <li><a href="#">Login/Signup</a></li> 
                </ul> 
            </nav> 
        </>
    );
}

export default Navbar;