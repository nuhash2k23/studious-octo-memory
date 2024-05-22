

import React from 'react'

const Configurator = () => {
 const placeholder = [' #344344 , #c498he, #f067ee, #58u34e' ]

  return (
   
       
 <div className="customizerwrapper">

    <div className="color">
        {placeholder.map((url)=>(
            <div
            key={url}
            className="swappers"
            style={{background: url}}>
                
            </div>
        ))}
    </div>
    <div>
        trigger cam1
    </div>
    <div>
        trigger cam1
    </div>
    <div>
        trigger cam1
    </div>
</div>
   
  )
}

export default Configurator