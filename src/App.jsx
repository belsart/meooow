import { useState } from 'react';
import Card from './components/Card/Card';
import data from './store';

function App() {
    return (
        <div className="App">
            <h1 className="header">Ты сегодня покормил кота?</h1>
            <div className="cards">
                {data.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}

export default App;
