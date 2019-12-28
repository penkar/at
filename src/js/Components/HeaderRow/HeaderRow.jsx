import React from 'react';
import { FaBars, FaBell, FaSearch } from 'react-icons/fa';

import HeaderButton from './HeaderButton.jsx';
import HeaderLink from './HeaderLink.jsx';
import Links from './Links';
import styles from './HeaderRow.module.scss';

const HeaderRow  = ({actions, settings}) => (
  <div className={styles.headerRow}>
    <ul className={styles.ul}>
      <HeaderButton
        className={styles.searchIcon}
        search={settings.searchSection}
        clickValue='searchSection'
        onClick={actions.changeSettingBool}
      >
        <FaSearch className={styles.standardIcon} />
      </HeaderButton>
      <HeaderButton
        clickValue='tableofcontents'
        onClick={actions.changeSettingBool}
      >
        <span>Sections&nbsp;</span>
        <FaBars className={styles.standardIcon} />
      </HeaderButton>
      { Links.map((link) => <HeaderLink {...link} key={link.title} />) }
    </ul>
    <ul className={styles.ul}>
      <HeaderLink>
        <FaBell className={styles.standardIcon} />
      </HeaderLink>
    </ul>
  </div>
)

export default HeaderRow