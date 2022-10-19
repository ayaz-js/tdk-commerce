import { navBarLinks } from './constants';

export default function scroll() {
    navBarLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const el = document.querySelector(link.getAttribute('href'));

            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}
