import classNames from 'classnames';
import styles from './events.module.scss';

export interface EventsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Events = ({ className }: EventsProps) => {
    return <section className={styles.events}>
        <h2>Events</h2>
        <p>Come check out some of our events!</p>
    </section>;
};
