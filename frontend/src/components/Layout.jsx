import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer";
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
