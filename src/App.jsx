import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import {CORE_CONCEPTS} from "./data/data";

function App() {
    return (
        <div>
            <Header />
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