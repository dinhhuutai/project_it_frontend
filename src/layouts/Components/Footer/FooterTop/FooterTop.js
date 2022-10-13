import classNames from 'classnames/bind';
import styles from './FooterTop.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cx = classNames.bind(styles);

function FooterTop() {
    return (
        <Container className={cx('wrapper-info')}>
            <Row>
                <Col>
                    <h3 className={cx('title')}>CATEGORIES</h3>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <Link to={config.routes.shop} className={cx('item-link')}>Women</Link>
                        </li>
                        <li className={cx('item')}>
                            <Link to={config.routes.shop} className={cx('item-link')}>Men</Link>
                        </li>
                        <li className={cx('item')}>
                            <Link to={config.routes.shop} className={cx('item-link')}>Shoes</Link>
                        </li>
                        <li className={cx('item')}>
                            <Link to={config.routes.shop} className={cx('item-link')}>Watches</Link>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <h3 className={cx('title')}>HELP</h3>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <Link to={config.routes.about} className={cx('item-link')}>Track Order</Link>
                        </li>
                        <li className={cx('item')}>
                            <Link to={config.routes.about} className={cx('item-link')}>Returns</Link>
                        </li>
                        <li className={cx('item')}>
                            <Link to={config.routes.about} className={cx('item-link')}>Shipping</Link>
                        </li>
                        <li className={cx('item')}>
                            <Link to={config.routes.about} className={cx('item-link')}>FAQs</Link>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <h3 className={cx('title')}>GET IN TOUCH</h3>
                    <p className={cx('content-touch')}>Any questions? Let us know in store at 1 Vo Van Ngan, Thu Duc, tp.HCM, VN  or call us on (+84) 923 044 965</p>
                    <ul className={cx('list-icon')}>
                        <li className={cx('icon')}>
                            <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li className={cx('icon')}>
                            <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li className={cx('icon')}>
                            <i class="fa-brands fa-pinterest-p"></i>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <h3 className={cx('title')}>NEWSLETTER</h3>
                    <form>
                        <div className={cx('input-wrapper')}>
                            <input type="email" name="email" placeholder="email@example.com" className={cx('input')} />
                            <div className={cx('focus-input')}></div>
                        </div>
                        <div className={cx('btn-wrapper')}>
                            <button className={cx('btn')}>Subscribe</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default FooterTop;
