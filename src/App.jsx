import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import {CORE_CONCEPTS} from "./data/data";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
const headerDescription = reactDescriptions[genRandomInt(reactDescriptions.length)];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function App() {
    return (
        <div>
            <Header headerDescription={headerDescription} />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        {CORE_CONCEPTS.map(concept => (
                            <CoreConcept image={concept.image} title={concept.title} description={concept.description} />
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;