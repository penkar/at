import React from 'react'
import HeaderButton from './HeaderButton'
import HeaderLink from './HeaderLink'
import Links from './Links'

import {FaBars, FaBell, FaSearch} from 'react-icons/fa'

const HeaderRow  = ({actions, settings}) => (
  <div id='header-row'>
    <ul className='news-link-ul'>

      <HeaderButton
        className={settings.searchSection ? 'search' : ''}
        clickValue='searchSection'
        onClick={actions.changeSettingBool}
      >
        <FaSearch className='standard-icon' />
      </HeaderButton>

      <HeaderButton
        clickValue='tableofcontents'
        onClick={actions.changeSettingBool}
      >
        <span>Sections&nbsp;</span>
        <FaBars className='standard-icon' />
      </HeaderButton>
      { Links.map((link) => <HeaderLink {...link} key={link.title} />) }
    </ul>

    <ul className='news-link-ul'>
      <HeaderLink>
        <FaBell className='standard-icon'/>
      </HeaderLink>
    </ul>
  </div>
)

export default HeaderRow
