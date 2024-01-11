<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts"/>
    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'
export default {
  name: 'HomeView',
  components: {PostList},
  setup() {
    
    const posts = ref([
      {title: 'welcome to my blog', body: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum', id: 1},
      {title: 'top 5 css tips', body: 'lorem ipsum', id: 2}
    ])

    const showPosts = ref(true)

    return { posts, showPosts, showPosts, showPosts}
  }
}
</script>
