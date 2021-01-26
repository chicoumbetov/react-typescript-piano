import React from 'react';
import { NoteType } from './helpers';
import Note from './Note';

type Props = {
    notes: NoteType[];
}

const Octave = ({ notes }: Props) => (
    <div>
        {notes.map((element: NoteType) => (
            <Note
                key={element.note}
                color={element.color}
                note={element.note}
            />
        ))}
    </div>
)

export default Octave;