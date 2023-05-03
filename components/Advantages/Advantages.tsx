import cn from "classnames";
import styles from './Advantages.module.css'
import { HhAdvantagesProps } from "./Advantages.props";
import CheckIcon from './check.svg'

export const Advantages = ({ advantages }: HhAdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <CheckIcon />
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline} />
                    <div>{a.description}</div>
                </div>
            ))}
        </>
    )
}