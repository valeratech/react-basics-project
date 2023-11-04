import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import {CORE_CONCEPTS, EXAMPLES} from "./data/data";
import MenuButton from "./components/MenuButton";
import {useState} from "react";

function App() {
    const [menuTopic, setMenuTopic] = useState('');

    function menuSelectHandler(e) {
        setMenuTopic(e.target.textContent.toLowerCase());
        console.log(e.target.textContent.toLowerCase());
    }

    let selectedTopic = <h3>Please Select a Topic</h3>;

    if (menuTopic) {
        selectedTopic =
            <div id="tab-content">
                <h3>{EXAMPLES[menuTopic].title}</h3>
                <p>{EXAMPLES[menuTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[menuTopic].code}</code>
                </pre>
            </div>;
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        {CORE_CONCEPTS.map((concept, index) => (
                            // Listed 2 alternate methods for dynamically rendering data from the CORE_CONCEPTS array
                            // <CoreConcept key={index+1} image={concept.image} title={concept.title} description={concept.description} />
                            <CoreConcept {...concept} />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {CORE_CONCEPTS.map((concept, index) => (
                            <MenuButton key={index+1} isActive={menuTopic === concept.title.toLowerCase()} onMenuSelectHandler={(e) => menuSelectHandler(e)}>{concept.title}</MenuButton>
                        ))}
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;