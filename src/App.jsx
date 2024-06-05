import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Nav/NavBar.jsx';
import Footer from './components/Footer/Footer';
import Tutorials from './content/Toturials/Toturials';
import Frontend from './content/Front-End/Frontend.jsx';
import Backend from './content/BackEnd/Backend.jsx';

function Layout() {
  const location = useLocation();

  const isExcludedPage = ["/tutorials", "/content/Front-End", "/content/Backend", "/content/Mobile", "/content/Design"].includes(location.pathname);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/content/Front-End" element={<Frontend />} />
        <Route path="/content/Backend" element={<Backend />} />
      </Routes>
      {!isExcludedPage && (
        <>
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}
{/** npm install react-router-dom react-icons bootstrap react-bootstrap
 */}
export default App;
