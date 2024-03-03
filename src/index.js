import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loader from './components/Loader'; // Import the Loader component
import './index.css';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <App />}
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
