import React from 'react';
import './index.scss';

export const Services: React.FC = () => {
  return (
    <div className='services-container'>
      <section className='contentWrapper'>
        <header className='headerTextWrapper'>
          <h1 className='titleText'>Services</h1>
          <h4>ChainSafe offers clients best-in-class engineering, consulting, and auditing services for Web3.</h4>
        <div className='rule'></div>
        </header>
        <div className='service-container'>
          <div className='service'>
            <img src="/pen.jpg" alt=""/>
            <a href="/"><h1>Solutions & Research</h1></a>
          </div>
          <div className='service'>
            <img src="/gears.jpg" alt=""/>
            <a href="/"><h1>Software Engineering</h1></a>
          </div>
          <div className='service'>
            <img src="/mag.jpg" alt=""/>
            <a href="/"><h1>Solidity Audits</h1></a>
          </div>
        </div>
      </section>
    </div>
  )
}