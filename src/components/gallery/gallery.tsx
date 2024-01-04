import classNames from 'classnames';
import styles from './gallery.module.scss';

export interface GalleryProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Gallery = ({ className }: GalleryProps) => {
    return <section className={classNames(styles.root, className)}>
        <img src="https://placehold.co/400x300" alt="placeholder" />
        <img src="https://placehold.co/400x300" alt="placeholder" />
        <img src="https://placehold.co/400x300" alt="placeholder" />
        <img src="https://placehold.co/400x300" alt="placeholder" />
        <img src="https://placehold.co/400x300" alt="placeholder" />
        <img src="https://placehold.co/400x300" alt="placeholder" />
    </section>;
};
