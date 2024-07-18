import styles from './buttons.module.css'



function Btns({onButtonClick}) {  
  
  let str = ["C" ,"1" ,"2" ,"+" ,"3" ,"4" ,"-", "5" ,"6" ,"*" ,"7" ,"8" ,"/"  ,"=" ,"9" ,"0" ,"." ]; 

  return<> 
  { str.map((value) =>
  <button 
    className={styles.buttons}  
    onClick ={() => onButtonClick(value)}>
    {value}
    </button>
   )}
  </>
}

export default Btns;