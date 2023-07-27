import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-warning " >
        <div class="container-fluid"style={{display:"flex",justifyContent:"space-between"}}>
          <a class="navbar-brand" href="#">
          <h2>Food Panda</h2>
          </a>
          <img src="https://play-lh.googleusercontent.com/b9oSFAFK4YVDj8yiAh5r7fO4o8KPaEmMbM5be4Z54Y4HpL_Z-EigUCDuOHCpWM13XqY" style={{height:"4rem",}}></img>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <Link to="/" style={{paddingRight:"30px"}}>Home</Link>
              <Link to="/courses" style={{paddingRight:"30px"}}>Menu</Link>
              <Link to="/about" style={{paddingRight:"30px"}}>AboutUs</Link>
            </form>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
