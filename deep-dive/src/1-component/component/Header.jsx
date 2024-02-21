import img from "../logo192.png";

// inline styling
export default function Header(){
    return <header style={{display:"flex",justifyContent:"space-between"}}>
        <img src={img} alt="react logo" width="40px" />
        <nav>
          <ul style={{display:"flex",listStyle:"none",gap:"1rem",}}>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
    </header>
  }