<template>
  <header>
    <h1>The Dojo Blog</h1>
    <nav>
      <div class="link">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </div>
      <div class="link">
        <router-link :to="{ name: 'Create' }">Create Post</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  header h1 {
    color: #797979;
    font-size: 48px;
    padding: 10px;
    transform: rotateZ(-1.5deg);
    border: 1px solid #ff8800;
    box-shadow: 2px 3px 5px #ff8800;
    border-radius: 7px;
    background-image: linear-gradient(145deg, #ff8800 2.13%, #ffffff 2.13%, #ffffff 50%, #ff8800 50%, #ff8800 52.13%, #ffffff 52.13%, #ffffff 100%);
    background-size: 81.94px 57.38px;
}

  .router-link-exact-active {
    /* border: 1px solid #444; */
  }

  nav {
    display: flex;
  }

  .link {
    transform: rotateZ(-1.5deg);
  }

  header a {
    color: #aaa;
    text-decoration: none;
    padding: 2px 7px;
    margin-left: 20px;
    border: 1px solid #ff8800;
    box-shadow: 2px 3px 5px #ff8800;
    border-radius: 7px;
  }

  .link a:hover {
    color: #999;
    background-color: rgba(255, 136, 0, .05);
    text-decoration: none;
    padding: 2px 7px;
    margin-left: 20px;
    border: 1px solid #ff8800;
    box-shadow: 2px 3px 5px #ff8800;

  }

  header a.router-link-active {
    color: #444;
    border: 1px solid #444;
    background-color: rgba(255, 136, 0, .25);
    font-weight: bold;
  }
</style>