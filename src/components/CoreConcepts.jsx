import CoreConcept from "./CoreConcept";
import './CoreConcepts.css';

function CoreConcepts({coreConceptsArray}) {
    return (
        <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
                {coreConceptsArray.map((concept, index) => (
                    // Listed 2 alternate methods for dynamically rendering data from the CORE_CONCEPTS array
                    // <CoreConcept key={index+1} image={concept.image} title={concept.title} description={concept.description} />
                    <CoreConcept key={index+1} {...concept} />
                ))}
            </ul>
        </section>
    );
}

export default CoreConcepts;
