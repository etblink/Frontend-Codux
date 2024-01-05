import classNames from 'classnames';
import styles from './home-page.module.scss';
import { Events } from '../events/events';
import { History } from '../history/history';
import { Specials } from '../specials/specials';
import { Gallery } from '../gallery/gallery';
import { Testimonials } from '../testimonials/testimonials';

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
    return <main className={classNames(styles.root, className)}>
        <div className={styles['app-width']}>
            <Events />
            <History />
            <Specials />
            <Gallery />
            <Testimonials />
        </div></main>;
};
