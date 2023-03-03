import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Component1 from "./pages/Component1";
import Component2 from "./pages/Component2";
import Component3 from "./pages/Component3";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Component1 />} />
          <Route path="/component2" element={<Component2 />} />
          <Route path="/component3" element={<Component3 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

