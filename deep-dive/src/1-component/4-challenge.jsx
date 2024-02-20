// create a page
import img from "./logo192.png";

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

function FunPage() {
  return (
    <>
      <img src={img} alt="react logo" />
      <h1>Fun fact about react!</h1>

      {/* <ul>
        <li>element 1</li>
        <li>element 2</li>
        <li>element 3</li>
        <li>element 4</li>
      </ul> */}
      <MyListComponent />
    </>
  );
}

export default FunPage;
