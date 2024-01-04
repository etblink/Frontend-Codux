import classNames from 'classnames';
import styles from './post-card.module.scss';

export interface PostCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PostCard = ({ className }: PostCardProps) => {
    return <div className={classNames(styles.root, className)}>
        <h2>This is the title to my post</h2>
        <p>This is a snippet from the body of the post</p>
        <div className={styles['post-card__details']}>
            <span>author</span>
            <span>$1.14</span>
        </div>
    </div>;
};
