import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Pages/Sidebar";
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import News from './Pages/News';
import Categories from './Pages/Categories';
import Settings from './Pages/Settings';
import About from './Pages/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/news" element={<News />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    );
  }
}

export default App;
