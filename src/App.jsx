import styles from './App.module.css'
import Btns from './buttons'; 
import InputValue from './input';
import { useState } from 'react';



function App() { 

   let [calVal, setCalVal] = useState("");   
   let onButtonClick = (buttonText) =>{
      
      if(buttonText ==="C"){ 
         let newValue = "";
            setCalVal(newValue);
      }else if(buttonText ==="="){ 
         const results = eval(calVal) ; 
          setCalVal(results);
      }else{ 
         let  newValue = calVal + buttonText ;
           setCalVal(newValue);
      }


   };


return<>
 
 <div className={styles.container}>
   <InputValue calvalue = {calVal} />
   <Btns onButtonClick = {onButtonClick}/>  
</div>
</>
} 

export default App;