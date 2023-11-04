import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import {CORE_CONCEPTS} from "./data/data";
import Examples from "./components/Examples";

function App() {
    return (
        <div>
            <Header />
            <main>
                <CoreConcepts coreConceptsArray={CORE_CONCEPTS} />
                <Examples coreConceptsArray={CORE_CONCEPTS} />
            </main>
        </div>
    );
}

export default App;