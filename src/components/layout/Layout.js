import { Footer, Header } from './';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className={styles.content}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
