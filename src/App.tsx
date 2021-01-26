import React from 'react';
import { notes } from './helpers';
import Octave from './Octave';

const App = () => {
    return (
        <div>
            <Octave notes={notes} />
        </div>
    )
}

export default App;