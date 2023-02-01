<script>
import * as THREE from 'three'

import {GLTFLoader} from "https://cdn.rawgit.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js"

export default{
  name: 'model',
  data () {
    return {
      scene: undefined,
      camera: undefined,
      renderer: undefined,
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
        // Ajout de la scène
      this.scene = new THREE.Scene()
      this.scene.background = null
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(this.renderer.domElement)  

      // Ajout de la lumière
        var light = new THREE.AmbientLight(0x404040); // soft white light
        light.position.set(10,10 ,10 );
        this.scene.add(light);

      // Ajout de la lampe
      var loader = new GLTFLoader();
      loader.load('@/assets/3D/LampeNaee.glb', function (gltf) {
        scene.add(gltf.scene);
        render();
        });
    },

    // Fonction d'animation
    render () {
      requestAnimationFrame(this.render)
      this.renderer.render(this.scene, this.camera)
    }
  }
}

</script>


<template>
    <span>aaaaaaaaaaaa</span>
</template>

<style scoped>

</style>