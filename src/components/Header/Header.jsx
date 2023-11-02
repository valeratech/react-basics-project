import reactAtomImg from "../../assets/react-core-concepts.png";
import './Header.css';


function Header() {

    function genRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
    const headerDescription = reactDescriptions[genRandomInt(reactDescriptions.length)];

    return (
        <header>
            <img src={reactAtomImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {headerDescription} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}

export default Header;