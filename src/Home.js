// import {Link} from "react-router-dom";
// import header_img from './header_img.png';
import Navbar from "./Components/Navbar";

function Home(){
    return (
        <div className='container'>
            <Navbar/>{}
            This is the home page component testing 3
            {/* <a href = "/contact"> Contact me </a>
            <Link to = {"/contact"}> Contact Link </Link> */}

        </div>
        
    );
}

// function Header(){
//     return (
//         <header className="header">
//           <img src={header_img} alt="UX Design" className="header_img" width="100%" height="30%"/>
  
//           <nav>
//             <ul>
//               <li><a href="/"> Home </a></li>
//               <li><a href="/"> About </a></li>
//               <li><a href="/"> Contact </a></li>
//               <li><a href="/"> Resume </a></li>
//             </ul>
//           </nav>
  
//         </header>
//     );
//   }

export default Home;