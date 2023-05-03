import cn from "classnames";
import styles from "./Textarea.module.css";
import { TextareaProps } from "./Textarea.props";
export const TextArea = ({className, ...props}: TextareaProps): JSX.Element => {
  return(
    <textarea className={cn(className, styles.input)} {...props}  />
  )
};
