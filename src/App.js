import React, { useState } from 'react';
import './App.css';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater';

const App = (props) => {
    const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;

    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    const handleAdd = (e) => {
        e.preventDefault();
        setList([...list, { text, id: new Date() }]);
        setText('');
    };

    const deleteItem = (id) => {
        setList((oldValues) => oldValues.filter((val) => val.id !== id));
    };

    return (
        <div className="App">
            <header className="">
                <h2>V11</h2>
                <form action="" onSubmit={handleAdd}>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button type="submit">Agregar</button>
                </form>
                {list.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            width: '40%',
                            backgroundColor: 'red',
                            borderRadius: '8px',
                            margin: '10px',
                        }}
                    >
                        <h3 style={{ color: 'black' }}>{item.text}</h3>
                        <button onClick={() => deleteItem(item.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </header>
            {newServiceWorkerDetected && (
                <footer style={{ backgroundColor: 'yellow' }}>
                    <h2 style={{ color: 'black' }}>
                        Nueva actualización, quieres actualizar?
                    </h2>
                    <button
                        style={{ color: 'black' }}
                        onClick={onLoadNewServiceWorkerAccept}
                    >
                        Actualizar!
                    </button>
                </footer>
            )}
        </div>
    );
};

export default withServiceWorkerUpdater(App);
