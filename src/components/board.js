import React, { useState } from 'react';
import Column from './column';


const Board = () =>{

    const [columns, setColumns] = useState({
        todo: [],
        doing: [],
        done: [],
      });

    const handleAddCard = (column, text) => {
        const newColumns = { ...columns };
        newColumns[column].push(text);
        setColumns(newColumns);
     };

    return(
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {Object.keys(columns).map((column, index) => (
                <Column key={index} title={column.toUpperCase()} cards={columns[column]} onAddCard={(text) => handleAddCard(column, text)} />
            ))}
        </div>
    );
    }
    export default Board;



