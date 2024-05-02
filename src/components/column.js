import React, { useState } from 'react';
import Card from './card';


const Column = ({ title, cards, onAddCard }) =>{

    const [newCardText, setNewCardText] = useState('');

    const handleAddCard = () => {
        if (newCardText.trim() !== '') {
          onAddCard(newCardText);
          setNewCardText('');
        }
      };


    return(
        <div style={{ backgroundColor: 'lightblue', padding: '8px', borderRadius: '4px', minWidth: '300px' }}>
            <h3>{title}</h3>
            {cards.map((card, index) => (
                <Card key={index} text={card} />
            ))}
            <div>
                <input
                    type="text"
                    placeholder="Enter card text"
                    value={newCardText}
                    onChange={(e) => setNewCardText(e.target.value)}
                />
                <button onClick={handleAddCard}>Add Card</button>
            </div>
        </div>
    );
    }
    export default Column;

