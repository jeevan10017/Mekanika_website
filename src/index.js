import React, { useState, useEffect, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import Loader from './components/Loader';
import './index.css';

const App = lazy(() => import('./App'));

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {loading ? <Loader /> : <App />}
    </Suspense>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
