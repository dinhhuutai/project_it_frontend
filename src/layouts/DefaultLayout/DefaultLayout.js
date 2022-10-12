import Header from '~/layouts/Components/Header';
import Footer from '~/layouts/Components/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />

            <div className="container">
                <div className="content">{children}</div>
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;
