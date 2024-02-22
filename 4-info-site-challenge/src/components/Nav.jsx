import logo from "../assets/logo192.png"
export default function Nav(){
    return <nav>
       <div className="container">
            <div className="content">
                <div className="logo">
                    <img src={logo} alt="react logo" />
                    <h3>ReactFacts</h3>
                </div>
                <h4>React Course - Project 1</h4>
            </div>
       </div>
    </nav>
}
