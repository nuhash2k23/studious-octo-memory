import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useRef, useState } from 'react'
import { Model } from './ModelFurniture'
import './Productshowcaser.css';
import {easing} from 'maath'
import {state} from './store';
import {ARButton, XR,} from '@react-three/xr';
import { AccumulativeShadows, Center, Environment, Html, OrbitControls, RandomizedLight } from '@react-three/drei'
import { useSnapshot } from 'valtio';
import {motion} from 'framer-motion'
const ProductShowcaser = ({position=[5,0, 6.5, 6], fov= 70}) => {
  const [backgroundColor, setBackgroundColor] = useState('#f5f5f5');
const cam = useRef()
  const snap = useSnapshot(state);
  const handleSessionEnd = (event) => {
    // Handle session end event
    // const cameraPosition = cam.current.camera.position;
    const cameraFov = cam.current.children;

    state.arimpact = true;
  };

  return (
    <motion.div className={snap.frontimpact ? 'overlay' : 'holder'} style={{ background: backgroundColor }}
    initial= {{opacity:0, y: 120}}
animate={{opacity:1, y:0}}
transition={{ duration:1.6, delay: 1}}>
      {snap.arimpact ? <Canvas ref={cam} eventPrefix='client' camera={{fov, position}} shadows >
        
        <XR foveation={0} referenceSpace='local-floor'  onSessionEnd={handleSessionEnd}>
        <ambientLight intensity={18.33} color="beige" />
            <Environment preset='forest'/>
            {/* <OrbitControls/> */}
            <pointLight intensity={20.43} color="beige" position={position=[-.10,0.93,3.1]} />
            {/* <pointLight intensity={80.43} color="beige" position={position=[.5,2.72,0.51]} /> */}
            {/* <pointLight intensity={20.43} color="beige" position={position=[1.0,1.5,3.1]} /> */}
    
            <CameraRig>
            <Center>
         {snap.frontimpact ? <></> :  <OrbitControls
      // Other props...
      minPolarAngle={Math.PI / 20} // Minimum vertical rotation (in radians)
      maxPolarAngle={Math.PI / 2} // Maximum vertical rotation (in radians)
      minDistance={1}             // Minimum distance from the target
      maxDistance={10} 
      dampingFactor={.01} 
      enableZoom={false}          // Maximum distance from the target
    /> }  
            <Model setBackgroundColor={setBackgroundColor}/>
            <Backdrop/>
           
            </Center>
            </CameraRig>
           </XR>
          </Canvas> : <Canvas ref={cam} eventPrefix='client' camera={{fov, position}} shadows >
        
        <XR foveation={0} referenceSpace='local-floor'  onSessionEnd={handleSessionEnd}>
        <ambientLight intensity={18.33} color="beige" />
            <Environment preset='forest'/>
            {/* <OrbitControls/> */}
            <pointLight intensity={20.43} color="beige" position={position=[-.10,0.93,3.1]} />
            {/* <pointLight intensity={80.43} color="beige" position={position=[.5,2.72,0.51]} /> */}
            {/* <pointLight intensity={20.43} color="beige" position={position=[1.0,1.5,3.1]} /> */}
    
            {/* <CameraRig> */}
            <Center>
     <OrbitControls/>
            <Model setBackgroundColor={setBackgroundColor}/>
            <Backdrop/>
           
            </Center>
            {/* </CameraRig> */}
           </XR>
          </Canvas> }
      
{snap.frontimpact ? <></> : <div className='ar'> <ARButton/></div>}


    </motion.div>
  )
}

 

function CameraRig({children}){

  const group = useRef()

  useFrame((state, delta)=>{
easing.dampE(
  group.current.rotation,
  [state.pointer.y/22, -state.pointer.x/3, 0],
  0.75,
  delta
)

  })
return(
  <group ref={group}>{children}</group>
)
}
function Backdrop(){
  return(
    <AccumulativeShadows
    temporal
    frames={60}
    
    alphaTest={1}
    scale={28}
    rotation={[0, Math.PI/2,0]}
  
    >
       {/* <AccumulativeShadows
    temporal
    frames={60}
    
    alphaTest={0.9}
    scale={15}
    rotation={[Math.PI/2, 0,0]}
    position={[0,0,-3.04]}
    ></AccumulativeShadows> */}
      <RandomizedLight
      amount={5}
      radius={9}
      intensity={4.87}
      ambient={.33}
      position={[5,5,-10]}/>
      <RandomizedLight
      amount={5}
      radius={9}
      intensity={2.87}
      ambient={0.03}
      position={[-105,-95,170]}/>
    </AccumulativeShadows>
  )
}
export default ProductShowcaser


