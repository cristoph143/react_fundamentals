const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{
        padding: 0,
        margin: 0,
        border: 0,
        display: "flex"
      }}>
        <h1 className="navbar-title">The Dojo Blog</h1>
        <nav className="navbar" style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
        }}>
          <div className="links" style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
