import classNames from 'classnames/bind';
import styles from './FooterBottom.module.scss';

import pay1 from '~/assets/images/icon-pay-01.png';
import pay2 from '~/assets/images/icon-pay-02.png';
import pay3 from '~/assets/images/icon-pay-03.png';
import pay4 from '~/assets/images/icon-pay-04.png';
import pay5 from '~/assets/images/icon-pay-05.png';

const cx = classNames.bind(styles);

function FooterBottom() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <img src={pay1} alt="pay-1" />
                </li>
                <li className={cx('item')}>
                    <img src={pay2} alt="pay-2" />
                </li>
                <li className={cx('item')}>
                    <img src={pay3} alt="pay-3" />
                </li>
                <li className={cx('item')}>
                    <img src={pay4} alt="pay-4" />
                </li>
                <li className={cx('item')}>
                    <img src={pay5} alt="pay-5" />
                </li>
            </ul>

            <p className={cx('text')}>
                Copyright ©2022 All rights reserved | Made with{' '}
                <i class="fa-regular fa-heart"></i>{' '}
                by{' '}
                <a className={cx('link')} href="https://www.facebook.com/dinhhuutai317/">Đinh Hữu Tài</a>{' '}
                & distributed by{' '}
                <a className={cx('link')} href="https://www.facebook.com/anh.caohoang.549">Cao Hoàng Anh</a>
            </p>
        </div>
    );
}

export default FooterBottom;
