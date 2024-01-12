import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar-container">
        <h2>my logo</h2>
        <ul>

            <li>Home</li>
            <li>products</li>
            <li>sign in</li>
            <li>register</li>
            <li style={{display:"none"}}>cart</li>
            <li style={{display:"none"}}>username</li>

        </ul>
        
        <input type="text" name="search"  placeholder="search"/>
      
    </div>
  )
}

export default Navbar
