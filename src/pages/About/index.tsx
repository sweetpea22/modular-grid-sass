import React from 'react';
import './index.scss';
import { Timeline } from './Timeline';
import { Header2 } from '../../components/Header';

export const About: React.FC = () => {

  return (
    <>
    <Header2 />
    {/* <div className='about-container'>
      <section className='contentWrapper'>
        <header className='headerTextWrapper'>
          <h1 className='titleText'>About</h1>
        </header>
        <div className='about-doubleColumn'>
          <div className='bodyTextWrapper'>
            <p className='bodyText'>Our multi-disciplinary team supports the decentralized web through high-impact contributions to leading protocols. Our work comprises node implementations, smart contract engineering, distributed systems research, blockchain applications, tools, and audits.</p>
            <p className='bodyText'>Our goal is to enable the world's systems to run on peer-to-peer and non-proprietary software. That's why everything we work on is open-source and community-oriented. Our work in a variety ecosystems reflects our conviction that the full vision for Web3 cannot be realized without persistence, collaboration, and an open mind. </p>
          </div>
          <img src='/about.png' alt=""/>
        </div>
        <Timeline/>
      </section>
    </div> */}
    </>
  )
}