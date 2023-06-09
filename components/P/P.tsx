import cn from "classnames";
import styles from "./P.module.css";
import { PProps } from "./P.props";
export const P = ({ size = 'medium', children, className, ...props }: PProps): JSX.Element => {
  return(
    <p
    className={cn(styles.p, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.big]: size === 'big',
    })} {...props}>{children}</p>
  )
};
