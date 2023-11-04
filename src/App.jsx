import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import {CORE_CONCEPTS, EXAMPLES} from "./data/data";
import MenuButton from "./components/MenuButton";
import {useState} from "react";

function App() {
    const menuTitles = ['Components', 'JSX', 'Props', 'State'];

    const [menuTopic, setMenuTopic] = useState('components');

    function menuSelectHandler(e) {
        setMenuTopic(e.target.textContent.toLowerCase());
        console.log(e.target.textContent.toLowerCase());
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
                        {menuTitles.map((title, index) => (
                            <MenuButton key={index+1} isActive={menuTopic === title.toLowerCase()} onMenuSelectHandler={(e) => menuSelectHandler(e)}>{title}</MenuButton>
                        ))}
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[menuTopic].title}</h3>
                        <p>{EXAMPLES[menuTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[menuTopic].code}</code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;