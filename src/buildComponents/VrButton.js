// import React from "react"
import { createElement } from "react-native"
import { VRButton } from "three/examples/jsm/webxr/VRButton"
import { useThree } from 'react-three-fiber'

const VrButton = () => {
    const { gl } = useThree()
    // document.body.appendChild(VRButton.createButton(gl));

    // return createElement("button", [], [])
}

export default VrButton