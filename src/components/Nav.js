import  {useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div className={`nav ${show ?  "nav__black" :""}`}>
    <img className="nav__logo"
    src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png" alt="Netflix Logo"/>

<img className="nav__avatar"
src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar logo"/>
    


    </div>
  )
}

export default Nav;