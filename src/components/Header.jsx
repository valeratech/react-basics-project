import reactAtomImg from "../assets/react-core-concepts.png";
function Header() {
    const description = reactDescriptions[genRandomInt(reactDescriptions.length)];
    return (
        <header>
            <img src={reactAtomImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}

export default Header;