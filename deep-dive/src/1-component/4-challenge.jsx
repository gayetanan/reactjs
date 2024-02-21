// create a page
import img from "./logo192.png";
import "./footer.css"
import styles from "./list-style.module.css"
/*
styling
*/

// inline styling
function Header(){
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
// turn list into component
// css module
function MyListComponent() {
  return (
    <ul className={styles.listStyle}>
      <li>element 1</li>
      <li>element 2</li>
      <li>element 3</li>
      <li>element 4</li>
    </ul>
  );
}

function MainContent(){
  return <>
    <h1 className="heading-1">Fun fact about react!</h1>
      <MyListComponent />
  </>
}
// component style
// by  creating a css file only for this component
function Footer(){
  return <footer>
    <small>Hello footer</small>
  </footer>
}
function FunPage() {
  return (
    <>
    <Header/>
    <MainContent/>
    <Footer/>
    </>
  );
}

export default FunPage;
