import React, { useState } from 'react';
import './index.scss';
import cls from 'classnames';

interface TabProps {
  year: string;
  isActive: boolean;
  id: string;
  onClick?: any;
}

export const timelineData = [
  {
    year: '0',
    text: 'Founders meet at Ethereum Developers Meetup Toronto',
  },
  {
    year: '0',
    text: 'ChainSafe joins the Alpha Start-up Initiative at Web Summit in Lisbon',
  },
  {
    year: '0',
    text: 'Curriculum created for Ethereum Developer course at York University',
  },
  {
    year: '1',
    text: 'Consulting relationship with Polymath and Shyft Network established',
  },
  {
    year: '1',
    text: 'The ChainSafe team grows to double digits',
  },
  {
    year: '1',
    text: 'ChainSafe receives grant from Vitalik Buterin for Lodestar development',
  },
  {
    year: '2',
    text: 'Development begins on Gossamer, a Go implementation of the Polkadot Runtime Environment',
  },
  {
    year: '2',
    text: 'ChainSafe starts hosting Ethereum Developers Meetup Toronto',
  },
  {
    year: '2',
    text: 'Development begins on Forest, a Rust implementation of the Filecoin Protocol',
  },
  {
    year: '3',
    text: 'ChainSafe closes pre-seed (please verify language) round led by ConsenSys',
  },
  {
    year: '3',
    text: 'ChainSafe takes over development and maintenance of web3.js',
  },
  {
    year: '3',
    text: 'ChainSafe hosts first annual conference: CSCON[0]',
  },
  {
    year: '4',
    text: 'ChainSafe acquires blockchain R&D firm NodeFactory',
  },
  {
    year: '4',
    text: 'ChainSafe opens a satelite office in Berlin',
  },
  {
    year: '4',
    text: 'The ChainSafe team grows to 100+ members',
  },
]

export const tabYears = [
  {
    id: '0',
    year: '2017'
  },
  {
    id: '1',
    year: '2018'
  },
  {
    id: '2',
    year: '2019'
  },
  {
    id: '3',
    year: '2020'
  },
  {
    id: '4',
    year: '2021'
  },
]

export const Tab: React.FC<TabProps> = ({year, isActive, id, onClick}) => {
  return (
    <p
      key={id}
      id={id}
      onClick={onClick}
      className={cls({'tab--selected': isActive === true })}
    >
      {year}
    </p>
  )
}

export const Timeline: React.FC = () => {
  
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (e:any) => {
    const index = parseInt(e.target.id, 0); 
    if (index !== activeTab) {
      setActiveTab(index);
    }
  }

  return (
    <div className='timeline-container'>
      <div className='tabMenu'>
        {tabYears.map((t) => (
          <Tab key={t.id} isActive={activeTab === parseInt(t.id)} id={t.id} onClick={handleClick} year={t.year}/>
          ))}
      </div>
      <div className='tabContent-container'>
        {timelineData.map((t, index) => (  
          <div className={cls('tabContent', {'activeTabContent': activeTab === parseInt(t.year)})}>
            <section className='line'></section>
            <div className='dot'></div>
            <p>{t.text}</p>
          </div>
      
        ))}
        

      </div>
    </div>
  )
}