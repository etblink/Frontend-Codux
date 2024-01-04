import classNames from 'classnames';
import styles from './navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return <div className={classNames(styles.root, className)}>
        <a href="#" className={styles['nav-link']}>Home</a>
        <a href="#" className={styles['nav-link']}>Community</a>
    </div>;
};
