import React from 'react';
import './index.scss';

const upcomingEvents = [
  {
    title: "EthPrague",
    to: "http://google.com",
    date: "June 11th",
    inPerson: true,
  },
  {
    title: "Ethereum Developers Meetup Toronto",
    to: "http://google.com",
    date: "June 12th",
    inPerson: false,
  },
  {
    title: "Gaming Community Call",
    to: "http://google.com",
    date: "June 15th",
    inPerson: false,
  },
  {
    title: "Polkadot Guild Meetup",
    to: "http://google.com",
    date: "June 15th",
    inPerson: false,
  },
  {
    title: "EthCC & ETHParis",
    to: "http://google.com",
    date: "July 19-21",
    inPerson: true,
  },
];

export const Events: React.FC = () => {

  return (
    <div className='events'>
      <article className='events--container'>
        <div className='events-header'>
          <h1 className='titleText'>Meet ChainSafe at an event</h1>
        </div>
        <div className='event-grid'>
          <p>Upcoming conferences and events</p>
          {upcomingEvents.map(({ title, to, date, inPerson }) => (
            <div className='event'>
              <a href={to} target='__blank' rel='noreferrer'>
                <p>{title}<img className='external-link' src="./arrow.png" alt=""/></p>
              </a>
              <p className='date'>{date}
                <span>{inPerson ? "In-Person" : "Virtual"}</span>
              </p>
            </div>
          ))}
        </div>
        <div className='double-column'>
          <div className='left-column'>
            <p>Don't Miss an Update</p>
            <div className='links'>
              <a href='https://www.youtube.com/c/chainsafesystems' target='__blank' rel='noopener noreferrer'>YouTube<img className='external-link' src="./arrow.png" alt=""/></a>
              <a href='https://blog.chainsafe.io/' target='__blank' rel='noopener noreferrer'>Medium<img className='external-link' src="./arrow.png" alt=""/></a>
              <a href='https://twitter.com/ChainSafeth' target='__blank' rel='noopener noreferrer'>Twitter<img className='external-link' src="./arrow.png" alt=""/></a>
            </div>
          </div>
          <div className='right-column'>
            <p>Past Events</p>
            <a href='https://www.youtube.com/playlist?list=PLPn3rQCo3XrMkZnW0UZkyH9cJVK1iV3Og'rel='noopener noreferrer'>CSCON[1] (Recordings)<img className='external-link' src="./arrow.png" alt=""/></a>
          </div>
        </div>
      </article>
    </div>
  )
}