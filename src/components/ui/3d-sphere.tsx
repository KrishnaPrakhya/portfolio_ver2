"use client";
import { useEffect, useRef } from "react";
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
    if (typeof window === "undefined" || !containerRef.current) return;

    let cleanup: (() => void) | undefined;

    // Dynamically import Three.js to avoid SSR issues
    import("three")
      .then(
        ({
          Scene,
          PerspectiveCamera,
          WebGLRenderer,
          SphereGeometry,
          MeshBasicMaterial,
          Mesh,
          PointLight,
          AmbientLight,
          Color,
          BufferGeometry,
          Points,
          PointsMaterial,
          Float32BufferAttribute,
        }) => {
          // Import OrbitControls with .js extension
          import("three/examples/jsm/controls/OrbitControls.js")
            .then((OrbitControlsModule) => {
              try {
                const container = containerRef.current;
                if (!container) return;

                // Scene setup
                const scene = new Scene();

                // Camera setup
                const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
                camera.position.z = 5;

                // Renderer setup
                const renderer = new WebGLRenderer({
                  antialias: true,
                  alpha: true,
                });
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setClearColor(0x000000, 0);

                // Add renderer to DOM
                container.innerHTML = "";
                container.appendChild(renderer.domElement);

                // Create sphere
                const geometry = new SphereGeometry(size, 64, 64);
                const material = new MeshBasicMaterial({
                  color: new Color(color),
                  wireframe: wireframe,
                  transparent: true,
                  opacity: 0.8,
                });
                const sphere = new Mesh(geometry, material);
                sphere.position.set(...position);
                scene.add(sphere);

                // Add stars inside the sphere
                const starsGeometry = new BufferGeometry();
                const starsMaterial = new PointsMaterial({
                  color: 0xffffff,
                  size: 0.02,
                });

                const starsVertices = [];
                for (let i = 0; i < 1000; i++) {
                  const x = (Math.random() - 0.5) * size * 1.8;
                  const y = (Math.random() - 0.5) * size * 1.8;
                  const z = (Math.random() - 0.5) * size * 1.8;
                  // Only add stars within the sphere
                  if (Math.sqrt(x * x + y * y + z * z) < size) {
                    starsVertices.push(x, y, z);
                  }
                }

                starsGeometry.setAttribute(
                  "position",
                  new Float32BufferAttribute(starsVertices, 3)
                );
                const stars = new Points(starsGeometry, starsMaterial);
                scene.add(stars);

                // Add point lights
                const light1 = new PointLight(0x00ffff, 1, 100);
                light1.position.set(10, 10, 10);
                scene.add(light1);

                const light2 = new PointLight(0xff00ff, 1, 100);
                light2.position.set(-10, -10, -10);
                scene.add(light2);

                // Add ambient light
                const ambientLight = new AmbientLight(0xffffff, 0.5);
                scene.add(ambientLight);

                // Add controls
                const { OrbitControls } = OrbitControlsModule;
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
                let animationFrameId: number;

                const animate = () => {
                  animationFrameId = requestAnimationFrame(animate);

                  // Update controls
                  controls.update();

                  // Add subtle movement
                  sphere.rotation.x += 0.001;
                  sphere.rotation.y += 0.001;
                  stars.rotation.x -= 0.0005;
                  stars.rotation.y -= 0.0005;

                  renderer.render(scene, camera);
                };

                animate();

                // Define cleanup function
                cleanup = () => {
                  window.removeEventListener("resize", handleResize);
                  if (container && renderer.domElement) {
                    container.removeChild(renderer.domElement);
                  }

                  cancelAnimationFrame(animationFrameId);

                  // Dispose resources
                  geometry.dispose();
                  material.dispose();
                  starsGeometry.dispose();
                  starsMaterial.dispose();
                  renderer.dispose();
                };
              } catch (error) {
                console.error("Error initializing Three.js:", error);
              }
            })
            .catch((err) => {
              console.error("Failed to load OrbitControls:", err);
            });
        }
      )
      .catch((err) => {
        console.error("Failed to load Three.js:", err);
      });

    // Return cleanup function
    return () => {
      if (cleanup) cleanup();
    };
  }, [size, position, color, wireframe, autoRotate]);

  return <div ref={containerRef} className={className} />;
}
