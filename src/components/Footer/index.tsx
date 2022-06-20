import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { DiscordLogo, GithubLogo, YoutubeLogo, LinkedinLogo, TwitterLogo, MediumLogo } from 'phosphor-react';

export const ClassicFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer--upper'>
        <div className='footer--upper--left'>
          <div className='footer-column'>
            <NavLink to="/public-goods" className='footer-column--header'>
              Public Goods
            </NavLink>
            <a href='/' className='footer-column--link'>
              Lodestar
            </a>
            <a href='/' className='footer-column--link'>
              Gossamer
            </a>
            <a href='/' className='footer-column--link'>
              Forest
            </a>
            <a href='/' className='footer-column--link'>
              Mina
            </a>
          </div>
          <div className='footer-column'>
            <NavLink to="/products" className='footer-column--header'>
              Products
            </NavLink>
            <a href='/' className='footer-column--link'>
              Storage
            </a>
            <a href='/' className='footer-column--link'>
              Files
            </a>
            <a href='/' className='footer-column--link'>
              Sygma
            </a>
            <a href='/' className='footer-column--link'>
              Gaming
            </a>
          </div>
          <div className='footer-column'>
            <NavLink to="/services" className='footer-column--header'>
              Services
            </NavLink>
            <NavLink to="/solutions" className='footer-column--link'>
              Solutions
            </NavLink>
            <NavLink to="/engineering" className='footer-column--link'>
              Engineering
            </NavLink>
            <NavLink to="/audits" className='footer-column--link'>
              Audits
            </NavLink>
          </div>
          <div className='footer-column'>
            <NavLink to="/company" className='footer-column--header'>
              Company
            </NavLink>
            <NavLink to="/solutions" className='footer-column--link'>
              About
            </NavLink>
            <NavLink to="/engineering" className='footer-column--link'>
              Careers
            </NavLink>
            <NavLink to="/audits" className='footer-column--link'>
              Events
            </NavLink>
          </div>
        </div>
        <div className='footer--upper--right'>
          <button>Contact ChainSafe</button>
          <div className='icons'>
            <a href='/'><DiscordLogo size={32} /></a>
            <a href='/'><YoutubeLogo size={32} /></a>
            <a href='/'><GithubLogo size={32} /></a>
            <a href='/'><TwitterLogo size={32} /></a>
            <a href='/'><MediumLogo size={32} /></a>
          </div>
        </div>
      </div>
      <div className='rule'></div>
      <div className='footer--lower'>
        <div className='bottom-left'>
          <p className='bottom-link'>
            {currentYear} &copy; ChainSafe Systems.
          </p>
          <a href='/' className='bottom-link'>
            Brand Assets
          </a>
          <a href='/' className='bottom-link'>
            Press Kit
          </a>
        </div>
        <div className='bottom-right'>
          <NavLink className='bottom-link' to="/terms">
            Terms
          </NavLink>
          <NavLink className='bottom-link' to="/privacy-policy">
            Privacy
          </NavLink>
        </div>
      </div>
    </footer>
  )
}