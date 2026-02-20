import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Счетчик: {count}</h2>

            <button onClick={() => setCount(count + 1)}>Увеличить</button>
            <button onClick={() => setCount(count - 1)}>Уменьшить</button>
        </div>
    );
}

export default Counter;