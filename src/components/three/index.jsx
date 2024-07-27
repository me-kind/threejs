import React, { useRef, useEffect, useState } from "react";
import { angleToRadius } from "../../utils/angles";
import { OrbitControls, SpotLight, useHelper } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { PointLightHelper, SpotLightHelper } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import Car2 from "./Car2";
// import Car1 from "./Car1";
import Car3 from "./Car3";

const index2 = () => {
  const OrbitControlsRef = useRef(null);
  const ballControlRef = useRef(null);
  const lightHelper = useRef(null);

  useFrame((state) => {
    // console.log(state.setFrameloop("always"));
    let x = Math.sin(Date.now() * 0.001) * 0.5 + 1;
    // console.log(x);
    // ballControlRef.current.position.y = x;
    // ballControlRef.current.rotation.y = Math.sin(Date.now() * 0.002) * Math.PI;
  });
  useHelper(lightHelper, SpotLightHelper, "red");
  //   useHelper(lightHelper,, "red");

  return (
    // <>
    //   <gridHelper scale={2} visible={true} />
    //   <axesHelper scale={9} />
    //   <PerspectiveCamera makeDefault position={[0, 1, 5]} />
    //   <OrbitControls
    //     ref={OrbitControlsRef}
    //     autoRotate={false}
    //     enableDamping={true}
    //   />

    //   {/* <mesh position={[0, 0.2, 0]} ref={ballControlRef} receiveShadow>
    //     <sphereGeometry args={[0.3, 32, 32]} />
    //     <meshStandardMaterial color={"pink"} wireframe={false} />
    //   </mesh> */}

    //   <mesh rotation={[angleToRadius(-90), 0, 0]} receiveShadow>
    //     <planeGeometry args={[7, 7]} />
    //     <meshStandardMaterial color={"#abbefd"} />
    //   </mesh>

    //   <ambientLight args={["white", 1]} />

    //   {/* <directionalLight args={["white", 3]} position={[-4, 1, 0]} /> */}
    //   <pointLight args={["white", 3]} position={[-4, 1, 0]} />

    //   <spotLight
    //     args={["white", 90, 5, angleToRadius(10), 0.3]}
    //     position={[-4, 1, 0]}
    //     ref={lightHelper}
    //     castShadow
    //   />
    // </>
    <>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  );
};

const index = () => {
  // const model2 = useLoader(
  //   GLTFLoader,
  //   "/models/car2/abandoned_snow_carraw.glb"
  // );
  const spotLightHelperRef = useRef(null);
  useHelper(spotLightHelperRef, SpotLightHelper, "red");
  return (
    <>
      <gridHelper />
      <axesHelper args={[20]} />
      <OrbitControls />
      {/* <primitive object={model2.scene} /> */}
      {/* <pointLight position={[10, -10, 0]} /> */}
      {/* <Car2 />
      <Car1 position={[1, 3, 5]} /> */}
      <Car3 />
      <SpotLight
        args={["white", 0, 20, 180]}
        position={[5, 10, 5]}
        ref={spotLightHelperRef}
      />
      <ambientLight intensity={1} />
    </>
  );
};

export default index;
