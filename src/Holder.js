import React, { useState } from 'react';
import './Holder.css';
import { Rating } from '@mui/material';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { state } from './store';
import {motion} from 'framer-motion';


const Counter = () => {
  const [count, setCount] = useState(1);

  const swapdec = () => {
    if (count > 1) {
      setCount(count - 1); // Decrement count if count is greater than 0
    }
  };

  const swapinc = () => {
    setCount(count + 1); // Increment count
  };

  const opacityStyle = count > 1 ? { opacity: 1 } : { opacity: 0.5 }; // Adjust opacity based on count value

  return (
    <>
      <div className='counter'>
        <div onClick={swapdec} style={opacityStyle}>-</div>
        <div>{count}</div>
        <div onClick={swapinc}>+</div>
      </div>
    </>
  );
};


const Holder = () => {
  return (
    <motion.div className="wrapper"
    initial= {{opacity:0}}
animate={{opacity:1}}
transition={{ duration:1.4, delay: 1}}
    >
      <div>
   <button className='btn' onClick={()=>{

state.frontimpact = true
}}> 🔙 </button>
      </div>
      <div>
        <h1>BEACH RELAXER</h1>
        <p>
          Picture yourself sinking into the plush cushions of the Beach Relaxer after a long day, feeling the stress
          melt away as you recline in luxurious comfort. Its ergonomic design cradles your body in all the right
          places, providing optimal support for your back, neck, and limbs, ensuring maximum relaxation with every
          moment spent lounging.
        </p>
        <div className='rating'>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} className='star'/>
          <span className='span'>43 Reviews ➖ 23 Reviews</span>
        </div>
        <button className='price'>$999</button>
        <Counter />
        <div className='addcart'>add to cart <sup className='sup'>++</sup></div>
      </div>
      <div className='producthelper'>
        <div className='inn'><FavoriteBorderOutlinedIcon className='svg'/>Wishlist</div>
        <div className='inn'><LiveHelpOutlinedIcon className='svg'/>Ask a question</div>
        <div className='inn'><ShareOutlinedIcon className='svg'/>Share</div>

      </div>
    </motion.div>
  );
};

export default Holder;
