import React from 'react';
import {createRoot} from 'react-dom/client';
import Message from './Message.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<Message name="John" />);
