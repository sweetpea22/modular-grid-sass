import React from 'react'
import './index.scss';

export const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <section className='home-contentWrapper'>
        <h2 className='titleText'>What you can do with X Project</h2>
        <main className='featureWrapper'>
          <div className='feature'>
            <span></span>
            <p>Interact with smart contracts as JS objects.</p>
          </div>
          <div className='feature'>
            <span></span>
            <p>Interact with smart contracts as JS objects.</p>
          </div>
          <div className='feature'>
            <span></span>
            <p>Interact with smart contracts as JS objects.</p>
          </div>
          <div className='feature'>
            <span></span>
            <p>Interact with smart contracts as JS objects.</p>
          </div>
          <div className='feature'>
            <span></span>
            <p>Interact with smart contracts as JS objects.</p>
          </div>
          <div className='feature'>
            <span></span>
            <p>Interact with smart contracts as JS objects.</p>
          </div>
        </main>
      </section>
      <section className='contentWrapper'>
        <div className='textWrapper'>
          <img src='/graphic.png' alt=""/>
          <div className='featuredText'>
            <p>A proud cornerstone of the ecosystem.</p>
            <div className='statsWrapper'>
              <p><div className='highlightText'>250,000+</div> weekly downloads.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}