<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie"; // always needed
import { Mesh, BoxGeometry, MeshBasicMaterial, GLTFLoader, AxesHelper, GridHelper, OBJLoader } from "@janvorisek/drie"; // mesh
import { PerspectiveCamera, OrbitControls, AmbientLight } from "@janvorisek/drie"; // camera
</script>

<template>
  <div style="width: 50vh; height: 50vh;">
    <Renderer :antialias="true">
      <PerspectiveCamera :position="[0, 4, 6]">
        <OrbitControls 
          :target="[0,0.5,0]"
          :enable-pan="false"
          :min-distance="1"
          :max-distance="5"
          :up="[0, 1, 1]"
        />
      </PerspectiveCamera>
      <Scene background="#f9f9f9">
        <!-- Position = rouge vert bleu -->
        <AmbientLight :position="[0, 0, 10]" :intensity="1" />
        <AxesHelper 
        :size="3"
        :position="[0, 0, 0]" />
        <GridHelper :size="10" :division="10" />
        <OBJLoader
          url="https://raw.githubusercontent.com/SamyGev/promis-back/main/Lampe_Naee.obj"
          :position="[0, 0, 0]"
          :scale="[1, 1, 1]"
        />
      </Scene>
    </Renderer>
  </div>
</template>