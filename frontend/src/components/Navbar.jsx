
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid">
  <div className="container"> 
  <a className="navbar-brand text-light m-4 " href="#">🎬WebFILM</a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light rounded"></span>
    </button>
    <div className="collapse navbar-collapse me-4 " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light " aria-current="page" href="#trending">Trending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#superhero">Superhero</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
