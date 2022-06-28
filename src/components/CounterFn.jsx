import {useEffect, useRef} from 'react';
import useLocalStorage from "../hooks/useLocalStorage";


function CounterFn({max}) {
    const [count, setCount] = useLocalStorage(0, 'count');
    const counterRef = useRef();
    counterRef.current = count;

    useEffect(() => {
        const d = new Date().getSeconds()
        const interval = setInterval(() => {
            console.log(`Counter: ${counterRef.current}`, new Date().getSeconds() - d)
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [count])

    function increment() {
        setCount(state => Math.min(state + 1, max));
    }

    function decrement() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

    return (
        <main>
            <p>{count}</p>
            <section>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </section>
        </main>
    )
}

export default CounterFn;