import styles from './styles.module.css';

interface InputTypes {
  label: string;
}

const InputField = ({ label }: InputTypes) => {
  return (
    <>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.inputField} placeholder=" " />
        <label className={styles.inputLabel}>{label}</label>
      </div>
    </>
  );
};

export default InputField;
