import React from 'react';
import { FaBars, FaBell } from 'react-icons/fa';

import HeaderButton from './HeaderButton';
import TransitionHeaderButton from './TransitionHeaderButton';
import HeaderLink from './HeaderLink';
import Links from './Links';
import { HEADER_ROW_PROPS } from '../../types';
import styles from './HeaderRow.module.scss';

export default function HeaderRow({ actions, settings }) {
  return (
    <div className={styles.headerRow}>
      <ul className={styles.ul}>
        <TransitionHeaderButton
          className={styles.searchIcon}
          search={settings.searchSection}
          changeSearch={actions.changeSetting}
          clickValue="searchSection"
          onClick={actions.changeSettingBool}
        />
        <HeaderButton
          clickValue="tableofcontents"
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
  );
}

HeaderRow.propTypes = HEADER_ROW_PROPS;
