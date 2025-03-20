import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Nav/NavBar.jsx';
import Footer from './components/Footer/Footer';
import Tutorials from './content/Toturials/Toturials';
import Frontend from './content/Front-End/Frontend.jsx';
import Backend from './content/BackEnd/Backend.jsx';

function Layout() {
  const location = useLocation();

  const isExcludedPage = ["/about", "/ref video", "/final-exam"].includes(location.pathname);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Tutorials />} />
        <Route path="/ref-video" element={<Frontend />} />
        <Route path="/final-exam" element={<Backend />} />
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
{/* Use (spacedesk) Application to Connecting Duplicate (Laptop or PC) to Tablet, Mobile and IPad */}
export default App;
