import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Importa solo los componentes de bootstrap que necesites en lugar de toda la biblioteca
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Elimina la importación del JS de bootstrap ya que lo cargaremos de forma diferida en index.html
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Utiliza lazy loading para cargar el componente App
const App = lazy(() => import('./App.jsx'));

// Componente de carga para mostrar mientras se carga la aplicación
const LoadingFallback = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Cargando...</span>
    </div>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </StrictMode>,
)
