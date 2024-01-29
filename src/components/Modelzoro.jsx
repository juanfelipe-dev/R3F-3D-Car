import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Modelzoro(props) {
  const { nodes, materials } = useGLTF("./models/turbo.glb");

  const pocar = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    //position cal ,dimension
    tl.current = gsap.timeline({
      defaults: { duration: 0.71, ease: "slow(0.7,0.7,false)" },
    });

    tl.current
      .to(pocar.current.position, { x: 0, y: 0, z: 0.55 })
      .to(pocar.current.rotation, { y: 3.14, x: 0, z: 0 });

    const tl1 = gsap.timeline({
      defaults: { duration: 1, ease: "expoScale(0.5,7,none)" },
    });
    tl1

      .to(pocar.current.rotation, { x: 0.77 })
      .to(pocar.current.position, { z: 0.6 })
      .to(pocar.current.rotation, { y: 1.6 });

    const tl2 = gsap.timeline({
      defaults: { duration: 0.85, ease: "expoScale(0.5,7,none)" },
    });
    tl2
      .to(pocar.current.rotation, { x: 0 })
      .to(pocar.current.position, { x: 1.5 })
      .to(pocar.current.position, { z: 2.5 });

    //sec3
    const tl3 = gsap.timeline({
      defaults: { duration: 0.88, ease: "expoScale(0.5,7,none)" },
    });
    tl3
      .to(pocar.current.rotation, { x: 0.09 })
      .to(pocar.current.position, { z: 0.38 })
      .to(pocar.current.position, { x: 0 })
      .to(pocar.current.rotation, { y: 0 })
      .to(pocar.current.rotation, { z: 0 })
      .to(pocar.current.position, { x: 0 });

    //sec4
    const tl4 = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    tl4

      .to(pocar.current.rotation, { x: 1.5 })
      .to(pocar.current.position, { z: 0 })
      .to(pocar.current.rotation, { z: 1.6 })
      .to(pocar.current.rotation, { z: 1.6 })
      .to(pocar.current.rotation, { z: 3.2 });

    //sec5

    const tl5 = gsap.timeline({
      defaults: { duration: 2, ease: "power2.inOut" },
    });
    tl5
      .to(pocar.current.rotation, { z: 3.2 })
      .to(pocar.current.rotation, { z: 6.3 })
      .to(pocar.current.rotation, { x: 0 })
      .to(pocar.current.rotation, { y: 1.6 });

    const tl6 = gsap.timeline({
      defaults: { duration: 2, ease: "power2.inOut" },
    });
    tl6
      .to(pocar.current.rotation, { y: 2.5 })
      .to(pocar.current.position, { x: 1.5 })
      .to(pocar.current.position, { z: 1.5 });

    const tl7 = gsap.timeline({
      defaults: { duration: 2, ease: "power2.inOut" },
    });
    tl7
      .to(pocar.current.rotation, { y: 1.6 })
      .to(pocar.current.position, { x: 0 })
      .to(pocar.current.position, { z: 2 });

    tl.current.add(tl1).add(tl2).add(tl3).add(tl4).add(tl5).add(tl6).add(tl7);
  }, []);

  return (
    <group {...props} dispose={null} ref={pocar} scale={1}>
      <group
        position={[-0.015, -0.009, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.578}
      >
        <group position={[0, 0, 0.029]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder000_0.geometry}
            material={materials.silver}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder000_1.geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder000_2.geometry}
            material={materials.rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder000_3.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group position={[0, 0, 0.029]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_0.geometry}
            material={materials.silver}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_2.geometry}
            material={materials.rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_3.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group position={[0, -0.003, 0.007]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.windshield_0.geometry}
            material={materials.window}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.windshield_1.geometry}
            material={materials.plastic}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot001_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot002_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot003_0.geometry}
          material={materials.tex_shiny}
          position={[0, 0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot004_0.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot005_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot006_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot007_0.geometry}
          material={materials.logo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot008_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot009_0.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot010_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot011_0.geometry}
          material={materials.coat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot011_0001.geometry}
          material={materials.coat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front001_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front001_1.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front001_2.geometry}
          material={materials.lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front003_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front003_1.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front004_0.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front004_1.geometry}
          material={materials.lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front004_2.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0.geometry}
          material={materials.glass}
          rotation={[-0.006, 0, 0]}
          scale={1.036}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front009_0.geometry}
          material={materials.tex_shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_0.geometry}
          material={materials.plastic}
          position={[0.036, -1.56, 0.333]}
          rotation={[0.709, -0.071, -0.245]}
          scale={[0.014, 0.014, 0.012]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_0.geometry}
          material={materials.full_black}
          scale={[0.332, 0.318, 0.318]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_0.geometry}
          material={materials.tex_shiny}
          position={[0.005, 3.581, 0.107]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_0.geometry}
          material={materials.paint}
          position={[-1.053, 3.51, -0.126]}
          rotation={[-1.439, -0.62, 0.775]}
          scale={0.024}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_0.geometry}
          material={materials.paint}
          position={[0.436, 3.723, -0.117]}
          rotation={[-1.483, 0.105, 0.803]}
          scale={0.024}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_0.geometry}
          material={materials.paint}
          position={[-0.488, 3.684, -0.328]}
          rotation={[-1.415, -0.045, 0.802]}
          scale={0.059}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.underbody_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window_rear_0.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window_rear001_0.geometry}
          material={materials.full_black}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/turbo.glb");
