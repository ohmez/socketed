import styles from './navbar.module.css'
function Navbar({ children }) {
    return (
        <div className={styles.App_Navbar_Container}>
                <div id="NavBar" className={styles.App_Navbar}>
                <a href="/">
                    <img id="Navbar_Logo" src alt="Logo"></img>
                    </a>
                        <img id="MenuIcon" src alt="Menu Icon" ></img>
                    <div className={styles.Navbar_Links}>
                        <ul className={styles.Navbar_List}>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/appointment">Appointment</a>
                            </li>
                            <li>
                                <a href="/plans">Plans</a>
                            </li>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>


    )
}
{/* <div className="App_Navbar_Container">
<div id="NavBar" className={Classes}>
<a href="/">
    <img id="Navbar_Logo" src={logo} alt="Ahns Custom & Vinyl logo"></img>
    </a>
        <img id="MenuIcon" src={MenuImg} alt="Menu Icon" onClick={this.Clickedit} ></img>
    <div className="Navbar_Links">
        <ul className="Navbar_List">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/appointment">Appointment</a>
            </li>
            <li>
                <a href="/plans">Plans</a>
            </li>
            <li>
                <a href="/about">About Us</a>
            </li>
        </ul>
    </div>
</div>
</div> */}  
export default Navbar