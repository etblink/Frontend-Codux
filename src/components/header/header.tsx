import classNames from 'classnames';
import styles from './header.module.scss';
import { Navbar } from '../navbar/navbar';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return <div className={styles.header}>
        <h1>4th Street Bar</h1>
        <Navbar className={styles.navbar} /></div>;
};
