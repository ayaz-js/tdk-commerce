import './index.scss';
import { menuButton, menuItem, menuOverlay } from '../scripts/constants';
import showMenu from '../scripts/showMenu';
import closeOnSelectMenuItem from '../scripts/closeOnSelectMenuItem';
import hideMenu from '../scripts/hideMenu';

menuButton.addEventListener('click', showMenu);

menuItem.addEventListener('click', closeOnSelectMenuItem);

menuOverlay.addEventListener('click', hideMenu);
