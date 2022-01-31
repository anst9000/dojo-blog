<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'

export default {
  components: { Spinner },
  props: ['id'],
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const { post, error, load } = getPost(route.params.id)

    load()

    const handleClick = async () => {
      await projectFirestore
        .collection('posts')
        .doc(props.id)
        .delete()

      router.push({ name: 'Home' })
    }

    return { post, error }
  }
}
</script>

<style scoped>
  .tags a {
    margin-right: 10px;
  }
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }

  button.delete {
background-image: linear-gradient(145deg, #ff8800 3.19%, #ffffff 3.19%, #ffffff 50%, #ff8800 50%, #ff8800 53.19%, #ffffff 53.19%, #ffffff 100%);
background-size: 81.94px 57.38px;
color: #444;
    font-weight: bold;
    box-shadow: 2px 3px 5px #ff8800;
    letter-spacing: 1px;
    margin: 10px auto;
  }
  button.delete:hover {
background-image: linear-gradient(145deg, #ff8800 4.26%, #ffffff 4.26%, #ffffff 50%, #ff8800 50%, #ff8800 54.26%, #ffffff 54.26%, #ffffff 100%);
background-size: 81.94px 57.38px;
color: #777;
  }
</style>