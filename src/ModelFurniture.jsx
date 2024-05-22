import React, { useEffect, useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import {state} from './store';
import './mode.css';
import { useSnapshot } from 'valtio';

export function Model({props, setBackgroundColor}) {
  const { nodes } = useGLTF('/Furnture.glb')
  const ref = useRef()
  const [textureIndex, setTextureIndex] = useState(0)
  const snap = useSnapshot(state);
  // const bgColors = ["#51ffc4", "#f6u887",'#f6u887','#f8f8f8'];
  const textures = [
    useLoader(TextureLoader, "texone.png"),
    useLoader(TextureLoader, "BRRW.png"),
    useLoader(TextureLoader, "BRN.png"),
    useLoader(TextureLoader, "WWH.png")
  ]

  // Function to handle texture change
  const handleTextureChange = (index) => {
    setTextureIndex(index);
    // setBackgroundColor(bgColors[index]);
  }

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.Shape.geometry}
        position={[0.001, -0.11, -1.816]}
        rotation={[-0.08, 0, 0]}
        scale={1.6082}
      > 
        <meshStandardMaterial map={textures[textureIndex]} metalness={.15} roughness={0.15}/>
      </mesh>

      {/* Buttons to change texture */}
      {snap.frontimpact ? <></> :   <Html as='div' className='html' style={{position: 
      'absolute'
      }} >
      
 
       
      <div  className='texconfg'>
        <div onClick={() => handleTextureChange(0)} className='texplaceone'></div>
        <div onClick={() => handleTextureChange(1)} className='texplacetwo'></div>
        <div onClick={() => handleTextureChange(2)} className='texplacethree'></div>
        <div onClick={() => handleTextureChange(3)} className='texplacefour'></div>
      </div>


      </Html>}
    
    </group>
  )
}

useGLTF.preload('/Furntureo.glb')
