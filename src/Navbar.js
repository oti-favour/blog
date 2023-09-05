import React from "react";

const Navbar = () => {
  return ( 
    // <nav className="navbar">
    //   <h1>The Masami Blog</h1>
    //   <div className="links">
    //     <Link to ="/">Home</Link>
    //     <Link to="/create">New Blog</Link>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="pink-color" href="/"> The Masami Blog</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/create">New Blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

   );
}
 
export default Navbar;