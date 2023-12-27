import React from 'react'
export default function Navbar(props) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-black-custom container-xxl sticky-top">
  <div className="container-fluid container-xxl">
    <a className="navbar-brand" href="#"><img src={props.logo} alt="" width={110}  /></a>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="bi bi-list text-light fs-2"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light text-decoration-underline px-2 fs-5"  aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-green px-2 fs-5" href="#">About</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link text-green px-2 fs-5" href='#'>Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-green px-2 fs-5" href='#'>Classes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-green px-2 fs-5" href='#'>Prices</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
                <button className="btn btn-light rounded-pill w-btn-nav mx-1" type="submit">Login</button>
                <button className="btn bg-green text-light rounded-pill w-btn-nav mx-1" type="submit">Sign Up  </button>
      </form>
    </div>
  </div>
</nav>  
    </div>
  )
}
