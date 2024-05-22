import {proxy} from "valtio"


const state = proxy({
    frontimpact: true,
    colors: ["#fefefe", "#c3efa4",'#3e3e3e','#e8u766'],
    selectedcolor: '#fefefe',
    arimpact: true
    
})

export{state}