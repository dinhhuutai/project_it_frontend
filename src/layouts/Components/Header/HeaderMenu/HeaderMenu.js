import className from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import config from '~/config';
import logo from '~/assets/images/logo.png';

import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function HeaderMenu() {
    return (
        <div className={cx('wrapper-menu')}>
            <div className={cx('menu')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={logo} alt="logo" />
                </Link>

                <ul className={cx('list')}>
                    <li className={cx('item')}>
                        <Link to={config.routes.home} className={cx('item-link')}>
                            Home
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link to={config.routes.shop} className={cx('item-link')}>
                            Shop
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link to={config.routes.features} className={cx('item-link')}>
                            Features
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link to={config.routes.blog} className={cx('item-link')}>
                            Blog
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link to={config.routes.about} className={cx('item-link')}>
                            About
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link to={config.routes.contact} className={cx('item-link')}>
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className={cx('interactive')}>
                    <div className={cx('search')}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className={cx('cart')}>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className={cx('favourite')}>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMenu;
