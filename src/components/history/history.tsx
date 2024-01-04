import classNames from 'classnames';
import styles from './history.module.scss';

export interface HistoryProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const History = ({ className }: HistoryProps) => {
    return <div className={classNames(styles.root, className)}>
        <h2>History</h2>
        <p>We have such a rich history to share</p>
    </div>;
};
