// create a page
import img from "./logo192.png";

function Header(){
  return <header>
      <img src={img} alt="react logo" width="40px" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
  </header>
}
// turn list into component
function MyListComponent() {
  return (
    <ul>
      <li>element 1</li>
      <li>element 2</li>
      <li>element 3</li>
      <li>element 4</li>
    </ul>
  );
}
function MainContent(){
  return <>
    <h1>Fun fact about react!</h1>
      <MyListComponent />
  </>
}
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
