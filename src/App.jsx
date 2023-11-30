// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;