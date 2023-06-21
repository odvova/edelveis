import React, { FunctionComponent, ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';

interface BaseLayoutProps {
    children?: ReactNode;
  }
  
  const Layout: FunctionComponent<BaseLayoutProps> = ({ children }) => {
    return (
      <>    
        <Navbar />
        <main>{children}</main>      
      </>
    );
  };
export default Layout;