<template>
  <div class="post">
    <p class="date-time">{{ dateTime }}</p>
    <router-link :to="{ name: 'Details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
        #{{ tag }}
    </span>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 25) + '...'
    })

    const dateTime = props.post.createdAt.toDate().toString().substring(0, 21)

    return { snippet, dateTime }
  }
}
</script>

<style>
  .post {
    margin: 0 40px 30px;
    padding: 5px 20px 30px 40px;
    border-radius: 7px;
    border-bottom: 2px solid #e7e7e7;
    background: rgba(255, 136, 0, .15);
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
    transform: rotateZ(-1.5deg);
  }

  .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 120%;
    margin-top: -3px;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    /* transform: rotateZ(-1.5deg); */
    box-shadow: 2px 3px 5px #444;
    border: 1px solid #444;
    border-radius: 7px;
  }

  a {
    position: relative;
    text-decoration: none;
  }

  a:active {
    box-shadow: none;
    top: 5px;
  }

  .post span {
    margin-right: .25rem;
  }

  .date-time {
    width: 11rem;
    margin-bottom: -12px;
    padding: 7px 0 7px 10px;
    border-radius: 7px;
    color: white;
    background: #ff8800;
    transform: rotateZ(-1.5deg);
    /* margin-left: -2rem; */
  }
</style>