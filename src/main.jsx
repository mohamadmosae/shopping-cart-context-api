import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import App from './Components/App/App'
import Appprovider from './AppContext/AppProvider'


createRoot(document.getElementById('root')).render(
<Appprovider>
    <App/>
    </Appprovider>
)
