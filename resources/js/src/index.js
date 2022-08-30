import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './utilities/context/appContext';
import './index.css';

const rootTag = document.getElementById('root');

if(rootTag) {
    const root = ReactDOM.createRoot(rootTag);
    root.render(
        <React.StrictMode>
            <AppProvider>
                <App />
            </AppProvider>
        </React.StrictMode>
    );
}
