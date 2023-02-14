import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './global'
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './routes'
import { Header } from './components/Header'
import { TodoProvider } from './hooks/useTodoList'
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <TodoProvider>
      <BrowserRouter>
        <Header />
        <MainRoutes />
        <GlobalStyle />
      </BrowserRouter>
      <ToastContainer />
    </TodoProvider>
  // </React.StrictMode>,
)
