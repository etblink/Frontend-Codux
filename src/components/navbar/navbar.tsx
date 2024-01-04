import classNames from 'classnames';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return <div className={classNames(styles.root, className)}>
        <Link to="/" className={styles['nav-link']}>Home</Link>
        <Link to="/community" className={styles['nav-link']}>Community</Link>
        {/* ... other navbar links */}
    </div>;
};
