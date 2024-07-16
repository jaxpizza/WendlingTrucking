import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Wendling Trucking - Professional Hauling Services in Central Illinois</title>
        <meta name="description" content="Wendling Trucking offers premium hauling services in Champaign County and Central Illinois for grain, dirt, lime, chemical, and more." />
        <link rel="canonical" href="https://www.wendlingtrucking.com" />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;