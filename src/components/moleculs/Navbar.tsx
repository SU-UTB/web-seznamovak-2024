import React, { useState } from 'react'
import MenuLink from '../atoms/MenuLink'
import SocialIcon from '../atoms/SocialIcon'
import fbIcon from '../../assets/img/navbar/fb.svg'
import igIcon from '../../assets/img/navbar/ig.svg'
import HamburgerBtn from '../atoms/HamburgerBtn'
//import '../../scss/Navbar.scss'

const Navbar: React.FC = () => {
  const [isNavOpened, setIsNavOpened] = useState(false)

  const menuLinks = [
    { sectionLink: 'prihlaska', sectionName: 'PŘIHLÁŠKA' },
    { sectionLink: 'informace', sectionName: 'INFORMACE' },
    /* { sectionLink: 'instruktori', sectionName: 'INSTRUKTOŘI' }, */
    { sectionLink: 'faq', sectionName: 'FAQ' },
    { sectionLink: 'partneri', sectionName: 'PARTNEŘI' },
    { sectionLink: 'kontakt', sectionName: 'KONTAKT' },
  ]

  const socialLinks = [
    {
      socialLink: 'https://www.instagram.com/studentskaunieutb/',
      socialIconImg: igIcon,
      socialPlatform: 'instagram',
    },
    {
      socialLink: 'https://www.facebook.com/studentskaunieutb',
      socialIconImg: fbIcon,
      socialPlatform: 'facebook',
    },
  ];

  const closeMenu = () => {
    setIsNavOpened(false);
  };

  return (
    <header className="sticky h-16 top-0 w-full bg-beige z-50">
      <nav className="flex flex-col items-center relative">
        <HamburgerBtn
          onClick={() => setIsNavOpened(!isNavOpened)}
          isNavOpened={isNavOpened}
        />
        <ul
          className={
            'flex flex-col bg-beige lg:flex-row flex-wrap lg:justify-evenly items-center w-full absolute lg:static top-16 h-screen lg:h-auto lg:top-0 transition-all duration-300 ' +
            (isNavOpened
              ? 'translate-x-0'
              : 'lg:translate-x-0 -translate-x-full')
          }
        >
          {menuLinks.map(({ sectionLink, sectionName }) => (
            <li className="my-4" key={sectionLink}>
              <MenuLink 
                sectionLink={sectionLink}
                sectionName={sectionName}
                onClick={closeMenu} />
            </li>
          ))}
          <div className="lg:hidden flex flex-wrap my-12">
            {socialLinks.map(
              ({ socialLink, socialIconImg, socialPlatform }) => (
                <div className="mx-8" key={socialLink}>
                  <SocialIcon
                    socialLink={socialLink}
                    socialIconImg={socialIconImg}
                    socialPlatform={socialPlatform}
                  />
                </div>
              )
            )}
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
