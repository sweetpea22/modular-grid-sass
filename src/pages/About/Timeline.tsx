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
    text: 'Founders meet at Ethereum Developers Meetup Toronto',
  },
  {
    year: '0',
    text: 'Founders meet at Ethereum Developers Meetup Toronto',
  },
  {
    year: '1',
    text: 'Founders meet at Ethereum Developers Meetup Toronto',
  },
  {
    year: '1',
    text: 'Founders meet at Ethereum Developers Meetup Toronto',
  },
  {
    year: '1',
    text: 'Founders meet at Ethereum Developers Meetup Toronto',
  },
  {
    year: '2',
    text: 'Founders meet at Ethereum Developers Meetup Toronto',
  },
  {
    year: '3',
    text: 'in 2020, something happened here at ChainSafe',
  },
  {
    year: '3',
    text: 'in 2020, something happened here at ChainSafe',
  },
  {
    year: '3',
    text: 'in 2020, something happened here at ChainSafe',
  },
  {
    year: '4',
    text: 'Founders meet at Ethereum Developers Meetup Toronto',
  },
  {
    year: '4',
    text: 'Founders meet at Ethereum Developers Meetup Toronto',
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