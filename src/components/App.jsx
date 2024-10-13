import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Register from 'pages/Register';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
