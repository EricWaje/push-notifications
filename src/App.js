import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState({ title: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/subscription', {
            title: data.title,
            message: data.message,
        });
    };

    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title..."
                    value={data.title}
                    onChange={handleChange}
                    name="title"
                />
                <input
                    type="text"
                    placeholder="Message..."
                    value={data.message}
                    onChange={handleChange}
                    name="message"
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default App;
