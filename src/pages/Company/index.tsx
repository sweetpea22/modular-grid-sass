import React from 'react';
import './index.scss';


export const Company: React.FC = () => {

  return (
    <>
      <div className='company'>
        <article className='company--container'>
          <div className='company-header'>
            {/* <h1 className='titleText'>Meet ChainSafe at an event</h1> */}
          </div>
          <div className='company-items'>
            <div className='item'>
              <h2>The mission of ChainSafe</h2>
              <button>Learn about the company</button>
            </div>
            <div className='item'>
              <h2>Work at ChainSafe</h2>
              <button>View open positions</button>
            </div>
            <div className='item'>
              <h2>Upcoming events</h2>
              <button>Find events</button>
            </div>
            <div className='item'>
              <h2>Media Library</h2>
              <button>View resources</button>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}