import React, { createRef } from 'react'
import { Canvas } from 'react-three-fiber'

import Camera from "./src/buildComponents/Camera"
import OrbitControl from "./src/buildComponents/OrbitControl"
import Box from "./src/buildComponents/Box"

console.disableYellowBox = true

export default function App() {
  const orbitRef = createRef();
  const cameraRef = createRef();

  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight />
      <gridHelper args={[20, 20]} />
      <pointLight position={[5, 5, 10]} />
      <Box position={[0, 0, 0]} />

      <Camera ref={cameraRef} />
      <OrbitControl ref={orbitRef} />
    </Canvas>
  )
}