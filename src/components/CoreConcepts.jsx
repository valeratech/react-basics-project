import CoreConcept from "./CoreConcept";
import Section from "./Section";
import './CoreConcepts.css';

function CoreConcepts({coreConceptsArray}) {
    return (
        <Section title="Time to get started!" id="core-concepts">
            <ul>
                {coreConceptsArray.map((concept, index) => (
                    // Listed 2 alternate methods for dynamically rendering data from the CORE_CONCEPTS array
                    // <CoreConcept key={index+1} image={concept.image} title={concept.title} description={concept.description} />
                    <CoreConcept key={index+1} {...concept} />
                ))}
            </ul>
        </Section>
    );
}

export default CoreConcepts;
