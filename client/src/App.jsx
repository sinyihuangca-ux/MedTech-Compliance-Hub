import React, { useState } from 'react'; 
import './App.css'; 
 
const pages = [ 
  { id: 'dashboard', label: 'Dashboard' }, 
  { id: 'products', label: 'Products' }, 
  { id: 'safety', label: 'Safety Testing' }, 
  { id: 'risks', label: 'Risk Management' }, 
  { id: 'projects', label: 'Project Tracking' }, 
  { id: 'issues', label: 'Product Issues' }, 
  { id: 'cases', label: 'Case Studies' }, 
]; 
 
function App() { 
  const [activePage, setActivePage] = useState('dashboard'); 
 
  const currentPage = pages.find((page) => page.id === activePage); 
 
  return ( 
    <div className="app-layout"> 
      <aside className="sidebar"> 
        <h2>MedTech Hub</h2> 
        <p>Compliance Management</p> 
 
        <nav className="sidebar-nav"> 
          {pages.map((page) => ( 
            <button 
              key={page.id} 
              className={ 
                activePage === page.id 
                  ? 'nav-button active' 
                  : 'nav-button' 
              } 
              onClick={() => setActivePage(page.id)} 
            > 
              {page.label} 
            </button> 
          ))} 
        </nav> 
      </aside> 
 
      <main className="main-content"> 
        <header className="top-header"> 
          <h1>{currentPage.label}</h1> 
          <p>Medical Device Testing and Compliance Management</p> 
        </header> 
 
        <section className="page-content"> 
          <h2>{currentPage.label}</h2> 
          <p> 
            This is the {currentPage.label} page. 
          </p> 
        </section> 
      </main> 
    </div> 
  ); 
} 
 
export default App; 