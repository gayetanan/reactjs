// create a page
import img from './logo192.png'
function FunPage(){
    return (
        <>
            <img src={img} alt="react logo" />
            <h1>Fun fact about react!</h1>
            <ul>
                <li>element 1</li>
                <li>element 2</li>
                <li>element 3</li>
                <li>element 4</li>
            </ul>     
        </>
    )
}

export default FunPage