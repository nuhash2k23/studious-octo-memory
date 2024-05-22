
import './App.css';
import Header from './Header';
import Holder from './Holder';
import ProductSpecs from './ProductSpecs';
import Overlay from './Overlay';
import ProductShowcaser from './ProductShowcaser';
import { useSnapshot } from 'valtio';
import {state} from './store';
import {motion} from 'framer-motion';
import { duration } from '@mui/material';
function App() {

  const snap = useSnapshot(state);

  return (
    <div className="App">
     <motion.div
     initial={{opacity:0, y:-40}}
     animate={{opacity:1, y: 0}}
     transition={{duration:1, delay:.25}}>
      <Header/>
      </motion.div>
      <motion.div className={`${snap.frontimpact ? 'overlay' : 'holder'}`}
       initial={{opacity:0, y: -20}}
       animate={{opacity:1, y: 0}}
       transition={{duration: 1, delay: 1}}>      
      <ProductShowcaser/>
   
      {snap.frontimpact ? <Overlay/> : <Holder/>}
{/* <Overlay/>
overlay acts as the landing page
holder only has cart template
  <Holder/> */}

 </motion.div>
 {/* <ProductSpecs/>  */}
  

    </div>
  );
}

export default App;
