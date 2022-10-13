import className from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import config from '~/config';
import logo from '~/assets/images/logo.png';
import Menu from './Menu';

import { useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function HeaderMenu() {

    const headerRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const x = window.pageYOffset;
    
            if(x <= 40) {
                headerRef.current.style.top = (40 - x) + 'px';
                headerRef.current.style.height = 84 + 'px';
            } else {
                headerRef.current.style.top = 0 + 'px';
                headerRef.current.style.height = 70 + 'px';
            }
        });
    })


    return (
        <div ref={headerRef} className={cx('wrapper-menu')}>
            <div className={cx('menu')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={logo} alt="logo" />
                </Link>

                <ul className={cx('list')}>
                    <li className={cx('item')}>
                        <Menu title="Home" to={config.routes.home} />
                    </li>
                    <li className={cx('item')}>
                        <Menu title="Shop" to={config.routes.shop} />
                    </li>
                    <li className={cx('item', 'token-menu')}>
                        <Menu title="Features" to={config.routes.features} />
                    </li>
                    <li className={cx('item')}>
                        <Menu title="Blog" to={config.routes.blog} />
                    </li>
                    <li className={cx('item')}>
                        <Menu title="About" to={config.routes.about} />
                    </li>
                    <li className={cx('item')}>
                        <Menu title="Contact" to={config.routes.contact} />
                    </li>
                </ul>

                <div className={cx('interactive')}>
                    <div className={cx('search')}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className={cx('cart', 'token-inter')}>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className={cx('favourite', 'token-inter')}>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMenu;
