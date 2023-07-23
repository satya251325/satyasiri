import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/satya">Satya</Link>
                  <Link to="/siri">Siri</Link>
                  <Link to="/koushik">Koushik</Link>
            </div>
      )
}
export default Navbar;