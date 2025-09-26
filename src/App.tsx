import { Route, Routes } from 'react-router-dom';
import routes from './pages/Exportation';
import PageNotFound from './components/pageNotFound';

function App() {
  return (
    <main className="App bg-bgPrimary">
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default App;
