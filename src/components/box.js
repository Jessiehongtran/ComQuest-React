import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import character from '../asset/RoughCharacter.gltf'

const Box = (props) => {
    const mesh = useRef();

    const [active, setActive] = useState(false);

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    })

    const texture = useMemo(() => new THREE.TextureLoader().load(character), []);

    return (
        <Box />
    )
}

export default Box;