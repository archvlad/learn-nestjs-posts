<template>
  <div>
    <div class="level is-mobile">
      <div class="level-left">
        <h1 class="title">All Posts</h1>
      </div>
      <div class="level-right">
        <button class="button is-primary">New Post</button>
      </div>
    </div>
    <PostCard v-for="post of posts" :key="post" :post="post"></PostCard>
  </div>
</template>

<script>
import axios from 'axios';
import PostCard from '../components/PostCard.vue';
export default {
  components: { PostCard },
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    let res = await axios({
      method: 'get',
      url: 'http://localhost:3000/posts',
    });
    this.posts = res.data;
  },
};
</script>
