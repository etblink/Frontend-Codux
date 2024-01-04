import classNames from 'classnames';
import styles from './specials.module.scss';

export interface SpecialsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Specials = ({ className }: SpecialsProps) => {
    return <section className={classNames(styles.root, className)}>
        <h2>Specials</h2>
        <p>Just wait until you try one of our delicious drink specials</p>
    </section>;
};
