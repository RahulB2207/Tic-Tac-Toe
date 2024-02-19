import logo from '../Assets/tictac logo.png';
import "../Css/Header.css";


const Header = () =>{
    return(
      <section style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
         <h1 id='welcome'>Welcome To....</h1>
         <img id='logo' src={logo} alt/>
      </section>
    );
}

export default Header;