import { menu } from './constants';

export default function hideMenu() {
    menu.classList.remove('menu__container_opened');
}
