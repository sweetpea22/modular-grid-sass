import React, { useState } from 'react';
import './index.scss';

interface TabProps {
  year: string;
  isActive: boolean;
  id: string;
  onClick?: any;
}

export const timelineData = [
  {
    id: '0',
  }
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
      <section className='line'></section>
      <div className='tabMenu'>
        {tabYears.map((t) => (
          <Tab key={t.id} isActive={activeTab === parseInt(t.id)} id={t.id} onClick={handleClick} year={t.year}/>
          ))}
      </div>
    </div>
  )
}