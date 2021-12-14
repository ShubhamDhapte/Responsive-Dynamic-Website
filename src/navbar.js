import react,{useState} from "react";
import { NavLink } from "react-router-dom";


 const Navbar = () =>{

    const [show,setShow] = useState(false);

    return <>
           <section className="navsection">
 <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
  <img
                src="./images/logo8.jpg"
                alt="heroimg"
                className="img-fluid1"
              />
    <a className="navbar-brand" href="/">GiantSoft<div className="Educationforall">Education For All</div></a>
    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"onClick={()=> setShow(!show)}>
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show?"show" : ""}`} >

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
        <li class="nav-item">
                  <NavLink class="nav-link" to="/service">
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                <NavLink to="/login" className="nav-linkbtn">
                  Login
                  </NavLink>
                </li>
                <li>
                <NavLink to="/register" className="nav-linkbtn">
                  Register
                  </NavLink>
                </li>
      </ul>
    </div>
  </div>
</nav>
</section>


    </>;
    
};
export default Navbar;

 