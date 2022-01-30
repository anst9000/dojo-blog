<template>
  <div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
.spin {
  display: block;
  width: 75px;
  height: 75px;
  margin: 60px auto;
  border: 12px solid transparent;
  border-radius: 50%;
  border-top-color: #ff8800;
  animation: spin 1.1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotateZ(360deg) }
}
</style>