import className from 'classnames/bind';
import styles from './HeaderTopbar.module.scss';

const cx = className.bind(styles);

function HeaderTopbar() {
    return (
        <div className={cx('top-bar')}>
            <div className={cx('content-topbar')}>
                <h5 className={cx('info-freeship')}>Free shipping for standard order over $100</h5>
                <ul className={cx('list-action')}>
                    <li>
                        <a href="#" className={cx('item-action')}>
                            Help & FAQs
                        </a>
                    </li>
                    <li>
                        <a href="#" className={cx('item-action')}>
                            My Account
                        </a>
                    </li>
                    <li>
                        <a href="#" className={cx('item-action')}>
                            EN
                        </a>
                    </li>
                    <li>
                        <a href="#" className={cx('item-action')}>
                            USD
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderTopbar;
