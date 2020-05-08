import React, { useEffect, forwardRef } from "react"
import { useThree } from "react-three-fiber"

const Camera = forwardRef((props, ref) => {
    const { setDefaultCamera } = useThree()
    useEffect(() => void setDefaultCamera(ref.current))

    return <perspectiveCamera ref={ref} position={[0, 5, 5]} rotateOnAxis={[45, 45, 45]} />
})

export default Camera