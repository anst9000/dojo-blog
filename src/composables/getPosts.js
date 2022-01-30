import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      // Create a reference to the collection in Firestore
      const response = await projectFirestore.collection('posts').get()

      posts.value = response.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { posts, error, load }
}

export default getPosts

/*
simulate delay
await new Promise(resolve => {
  setTimeout(resolve, 1200)
})
*/