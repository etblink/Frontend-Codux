import classNames from 'classnames';
import styles from './testimonials.module.scss';

export interface TestimonialsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Testimonials = ({ className }: TestimonialsProps) => {
    return <section className={classNames(styles.root, className)}>
        <h2>Testimonials</h2>
        <p>This place is great!</p>
        <p>I had my birthday here</p>
        <p>My favorite is the cute bartender!</p>
    </section>;
};
