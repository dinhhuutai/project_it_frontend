import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import HeaderTopbar from './HeaderTopbar';
import HeaderMenu from './HeaderMenu';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <HeaderTopbar />
                <HeaderMenu />
            </div>
        </header>
    );
}

export default Header;
