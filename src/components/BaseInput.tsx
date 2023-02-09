import type { ComponentProps, FunctionComponent } from "react";
import classnames from "classnames";
import styles from "./BaseInput.module.css";

interface IBaseInputProps extends ComponentProps<'input'> {
  label: string;
}

export const BaseInput: FunctionComponent<IBaseInputProps> = (props) => {
  const { id, label, className, ...rest } = props;
  return (
    <div className={styles.baseInputContainer}>
      <label htmlFor={id} className={styles.baseInputLabel}>{label}</label>
      <input
        id={id}
        className={classnames(styles.baseInput, className)}
        {...rest}
      />
    </div>
  );
}
