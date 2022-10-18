import hideMenu from './hideMenu';

export default function closeOnSelectMenuItem(event) {
    const { target } = event;

    if (target && target.classList.contains('menu__link')) {
        hideMenu();
    }
}
