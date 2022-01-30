<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>

    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <spinner />
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  components: { Spinner, PostList, TagCloud },
  props: ['tag'],
  setup() {
    const route = useRoute()
    const { posts, error, load } = getPosts()
    load()

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag))
    })

    return { posts, postsWithTag, error, load }
  }
}
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>