import React, { useState } from 'react'
//import '../../scss/Navbar.scss'
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
    { sectionLink: 'faq', sectionName: 'FAQ' },
    { sectionLink: 'informace', sectionName: 'INFORMACE' },
    /* { sectionLink: 'instruktori', sectionName: 'INSTRUKTOŘI' }, */
    // { sectionLink: 'partneri', sectionName: 'PARTNEŘI' },
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
    <header className="absolute top-4 left-1/2 -translate-x-1/2 max-w-7xl w-[85%] bg-beige z-50 rounded-[32px] shadow-sm">
      <nav className="flex flex-col items-center relative py-0 px-6">
        <HamburgerBtn
          onClick={() => setIsNavOpened(!isNavOpened)}
          isNavOpened={isNavOpened}
        />
        <ul
          className={
            'flex flex-col bg-beige lg:bg-transparent rounded-[32px] lg:rounded-none lg:flex-row flex-wrap lg:justify-evenly items-center w-full absolute lg:static top-14 max-h-[70vh] lg:max-h-none lg:h-auto lg:top-0 transition-all duration-300 overflow-hidden ' +
            (isNavOpened
              ? 'opacity-100 translate-y-0 py-3'
              : 'lg:opacity-100 lg:translate-y-0 opacity-0 max-h-0 -translate-y-4')
          }
        >
          {menuLinks.map(({ sectionLink, sectionName }) => (
            <li className="my-3 lg:my-1.5" key={sectionLink}>
              <MenuLink 
                sectionLink={sectionLink}
                sectionName={sectionName}
                onClick={closeMenu} />
            </li>
          ))}
          <div className="lg:hidden flex flex-wrap my-4">
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