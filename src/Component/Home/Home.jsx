import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard'
import Sidenav from '../Sidenav/Sidenav'
import { AuthProvider, useAuth  } from '../AuthContext/AuthContext'

const Home = () => {
  const { isLoggedIn } = useAuth();

    return (
      <div className="container">
        <h1>Home</h1>
        <p>Welcome to the Home!</p>
      </div>
      );
};

export default Home;