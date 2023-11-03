import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import {CORE_CONCEPTS} from "./data/data";
import MenuButton from "./components/MenuButton";
import {useState} from "react";

function App() {
    const menuTitles = ['Components', 'JSX', 'Props', 'State'];

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        {CORE_CONCEPTS.map((concept, index) => (
                            <CoreConcept key={index+1} image={concept.image} title={concept.title} description={concept.description} />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {menuTitles.map((title, index) => (
                            <MenuButton key={index+1}>{title}</MenuButton>
                        ))}
                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;