import { useState } from 'preact/hooks';

export default function Greeting({messages}) {
    const randomMessage = () => (Math.floor(Math.random() * messages.length));

    const [greeting, setGreeting] = useState(1);

    return (
        <div>
        <h3>{messages[greeting]}! Thank you for visiting!</h3>
        <button onClick={() => setGreeting(randomMessage())}>
         New Greeting
        </button>
       </div>  
    );
}