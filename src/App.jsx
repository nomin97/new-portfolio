import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./components/Page";
import { useLocation } from "react-router-dom";
import React from 'react';
import Contact from './components/Contact';

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <div>
      <h1>My Portfolio</h1>
      <Contact />
    </div>
      <Footer />
    </div>
  );
}

export default App;
