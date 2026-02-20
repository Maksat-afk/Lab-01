import { useState } from 'react';
import './App.css';

function App() {
    const [isHighlighted, setIsHighlighted] = useState(false);

    return (
        <div>
            <button onClick={() => setIsHighlighted(!isHighlighted)}>
                Переключить подсветку
            </button>

            <p className={isHighlighted ? 'highlighted' : ''}>
                Этот текст будет подсвечиваться при нажатии на кнопку.
            </p>
        </div>
    );
}

export default App;