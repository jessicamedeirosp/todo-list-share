import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { MainRoutes } from './routes'
import { TodoProvider } from './providers/TodoProvider'

import 'react-toastify/dist/ReactToastify.css'
import { ModalForm } from './components/ModalForm'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TodoProvider>
      <BrowserRouter>
        <Header />
        <MainRoutes />
        <ToastContainer />
        <ModalForm />
      </BrowserRouter>
      <GlobalStyle />    
  </TodoProvider>,
)
