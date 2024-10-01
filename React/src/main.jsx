import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes/router';
import React from 'react';
import { useEffect } from 'react';

createRoot(document.getElementById('root')).render(

    router

)
