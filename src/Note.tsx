import React from 'react';
import styled from 'styled-components';

const Black = styled.button`
    background: black;
`
const White = styled.button`
    background: white;
`

type Props = {
    color: string;
    note: string;
}

const Note= ({color, note}: Props) => 
    color === 'white' ? (
        <White value={note} />

    ) : (
        <Black value={note} />
    )

export default Note;