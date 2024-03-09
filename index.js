// 引入 Three.js 库
import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 300;

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建粒子材质
const particleMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1
});

// 创建粒子几何体
const particleGeometry = new THREE.Geometry();
for (let i = 0; i < 10000; i++) {
    const vertex = new THREE.Vector3();
    vertex.x = Math.random() * 1000 - 500;
    vertex.y = Math.random() * 1000 - 500;
    vertex.z = Math.random() * 1000 - 500;
    particleGeometry.vertices.push(vertex);
}

// 创建粒子系统
const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// 渲染循环
function animate() {
    requestAnimationFrame(animate);

    // 旋转粒子系统
    particles.rotation.x += 0.001;
    particles.rotation.y += 0.001;

    renderer.render(scene, camera);
}
animate();
