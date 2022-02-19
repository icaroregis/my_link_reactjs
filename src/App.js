import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}
