import MenuButton from "./MenuButton";
import Section from "./Section";
import TabMenu from "./TabMenu";
import {EXAMPLES} from "../data/data";
import './Examples.css';
import {useState} from "react";

function Examples({coreConceptsArray}) {

    const [menuTopic, setMenuTopic] = useState('');

    function menuSelectHandler(e) {
        setMenuTopic(e.target.textContent.toLowerCase());
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

    const examplesButtons =
        <>
            {coreConceptsArray.map((concept, index) => (
                <MenuButton
                    key={index+1}
                    isActive={menuTopic === concept.title.toLowerCase()}
                    onMenuSelect={menuSelectHandler}
                >
                    {concept.title}
                </MenuButton>
            ))}
        </>

    return (
        <Section title="Examples" id="examples">
            <TabMenu buttons={examplesButtons}>{selectedTopic}</TabMenu>
        </Section>
    )
}

export default Examples;