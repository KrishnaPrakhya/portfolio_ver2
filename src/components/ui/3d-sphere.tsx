"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface SphereProps {
  size?: number;
  position?: [number, number, number];
  color?: string;
  wireframe?: boolean;
  autoRotate?: boolean;
  className?: string;
}

export default function Sphere3D({
  size = 1.5,
  position = [0, 0, 0],
  color = "#00ffff",
  wireframe = true,
  autoRotate = true,
  className = "w-full h-full",
}: SphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current; // Capture ref value

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    // Add renderer to DOM
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Create sphere
    const geometry = new THREE.SphereGeometry(size, 64, 64);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: wireframe,
      transparent: true,
      opacity: 0.8,
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(...position);
    scene.add(sphere);

    // Add point lights
    const light1 = new THREE.PointLight(0x00ffff, 1, 100);
    light1.position.set(10, 10, 10);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xff00ff, 1, 100);
    light2.position.set(-10, -10, -10);
    scene.add(light2);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 1;

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update controls
      controls.update();

      // Add subtle movement
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [size, position, color, wireframe, autoRotate]);

  return <div ref={containerRef} className={className} />;
}
