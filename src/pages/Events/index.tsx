import React from 'react';
import './index.scss';

export const Events: React.FC = () => {

  return (
    <div className='event-container'>
      <section className='contentWrapper'>
        <header className='headerTextWrapper'>
          <h1 className='titleText'>Meet ChainSafe at an event</h1>
        </header>
        <div className='event-grid'>
          <p>Upcoming conferences and events</p>
          <div className='event'>
            <a href='http://google.com' target='__blank' rel='noreferrer'><p>EthPrague<img className='link--external' src="./arrow.png" alt=""/></p></a>
            <p className='date'>June 11th <span>In Person</span></p>
          </div>
          <div className='event'>
            <a href='http://google.com' target='__blank' rel='noreferrer'><p>Ethereum Developers Meetup Toronto<img className='link--external' src="./arrow.png" alt=""/></p></a>
            <p className='date'>June 11th <span>Virtual</span></p>
          </div>
          <div className='event'>
            <a href='http://google.com' target='__blank' rel='noreferrer'><p>Gaming Community Call<img className='link--external' src="./arrow.png" alt=""/></p></a>
            <p className='date'>June 18th <span>Virtual</span></p>
          </div>
          <div className='event'>
            <a href='http://google.com' target='__blank' rel='noreferrer'><p>Polkadot Guild Meetup<img className='link--external' src="./arrow.png" alt=""/></p></a>
            <p className='date'>June 25th <span>Virtual</span></p>
          </div>
          <div className='event'>
            <a href='http://google.com' target='__blank' rel='noreferrer'><p>EthCC & ETHParis<img className='link--external' src="./arrow.png" alt=""/></p></a>
            <p className='date'>July 11-19th <span>In Person</span></p>
          </div>
        </div>
        <div className='event-doubleColumn'>
          <div className='leftCol'>
            <p>Don't Miss an Update</p>
            <div className='links'>
              <a href='http://google.com' target='__blank' rel='noopener noreferrer'>YouTube<img className='link--external' src="./arrow.png" alt=""/></a>
              <a href='http://google.com' target='__blank' rel='noopener noreferrer'>Medium<img className='link--external' src="./arrow.png" alt=""/></a>
              <a href='http://google.com' target='__blank' rel='noopener noreferrer'>Twitter<img className='link--external' src="./arrow.png" alt=""/></a>
            </div>
          </div>
          <div className='rightCol'>
            <p>Past Events</p>
            <a href='http://google.com'rel='noopener noreferrer'>CSCON[1] (Recordings)<img className='link--external' src="./arrow.png" alt=""/></a>
          </div>
        </div>
      </section>
    </div>
  )
}