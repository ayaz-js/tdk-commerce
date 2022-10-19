import './index.scss';
// eslint-disable-next-line no-unused-vars
import smoothscroll from 'smoothscroll-polyfill';
import { menuButton, menuItem, menuOverlay } from '../scripts/constants';
import showMenu from '../scripts/showMenu';
import closeOnSelectMenuItem from '../scripts/closeOnSelectMenuItem';
import hideMenu from '../scripts/hideMenu';
import scroll from '../scripts/scroll';

menuButton.addEventListener('click', showMenu);

menuItem.addEventListener('click', closeOnSelectMenuItem);

menuOverlay.addEventListener('click', hideMenu);

scroll();
