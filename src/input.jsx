import styles from './input.module.css'

let InputValue = ({calvalue}) =>{
   return <>
     <input type="text" 
     className={styles.input} 
     value = {calvalue}
     readOnly/>
   </>
}

export default InputValue;