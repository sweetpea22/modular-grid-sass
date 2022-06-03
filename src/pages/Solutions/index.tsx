import React from 'react'
import { FadeOutNav } from '../../components/FadeOutNav';
import './index.scss';

export const Solutions: React.FC = () => {
  return (
    <>
      <FadeOutNav />
      <div className='solutions-container'>
      <section className='contentWrapper'>
        <header className='headerTextWrapper'>
          <h1 className='titleText'>Solutions & Research</h1>
        </header>
        <div className='singleColumnText'>
          <h4>
            We work on some of the toughest problems in the blockchain space.
          </h4>
          <p>
            We investigate hard problems and create specifications to help your protocol or team explore what’s possible. Got quandaries on technical or business frontiers? We’ll pioneer an elegant and customized solution for you. 
          </p>
          <button className='primaryBtn'>Request a quote</button>
        </div>
        <div className='featured'>
          <img src="/eng.png" alt=""/>
          <div className='doubleColumnWrapper'>
            <h4>Example Network</h4>
            <p>Read about how we helped the team at ExampleNet with writing their specification for the Alice Validator.</p>
          </div>
        </div>
        <div className='techAdvisory'>
          <div className='doubleColumnWrapper'>
            <h4>Technical design advisory & implementation consulting</h4>
            <div>
              <p>We help clients solve technical problems and make better decisions.</p>
              <p>With our domain expertise, we help existing blockchain projects and new entrants to the space build better solutions and implementations. </p>
            </div>
          </div>
          <div className='itemsWrapper'>
            <div className='item'>
              <div></div>
              <p className='bodyText'>
                Cross-chain messaging
              </p>
            </div>
            <div className='item'>
              <div></div>
              <p className='bodyText'>
                DeFi Specifications
              </p>
            </div>
            <div className='item'>
              <div></div>
              <p className='bodyText'>
                Protocol Design
              </p>
            </div>
            <div className='item'>
              <div></div>
              <p className='bodyText'>
                Protocol Design
              </p>
            </div>
          </div>
        </div>
        <div className='doubleColumn'>
          <h4>Crypto-economics consulting</h4>
          <div className='bodyTextWrapper'>
            <p className='bodyText'>We design incentive systems that last.</p>
            <p className='bodyText'>In crypto, solving technical challenges is often closely correlated with the economic (incentive) design of a system. This requires a particular breed of expertise—and our multi-disciplinary team has the deep, first-hand experience to tackle any crypto-economic design challenge.</p>
          </div>
        </div>
        <div className='doubleColumn'>
          <h4>Prototyping</h4>
          <div className='bodyTextWrapper'>
            <p className='bodyText'>We prove the technical feasibility of novel ideas and concepts.</p>
            <p className='bodyText'>We offer prototyping services to ensure that all elements of a design are working as expected and the viability of the proposed solution is established. Have assumptions you want to stress test? Get in touch with us today. </p>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}