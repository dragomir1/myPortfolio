import React from 'react';
import './Footer.css';

const footer = () => (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
          Copyright &copy; {new Date().getFullYear()} Michael Dragomir
        </footer>
  )


export default footer;
