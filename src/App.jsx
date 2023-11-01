import reactAtomImg from './assets/react-core-concepts.png';
import Header from "./components/Header";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
const description = reactDescriptions[genRandomInt(reactDescriptions.length)];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function App() {
    return (
        <div>
            <Header description={description} />
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;