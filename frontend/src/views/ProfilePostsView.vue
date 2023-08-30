<template>
  <div>
    <div class="level is-mobile">
      <div class="level-left">
        <h1 class="title">My Posts</h1>
      </div>
      <div class="level-right">
        <router-link class="button is-primary" to="/profile/create">
          New Post
        </router-link>
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
      url: `http://localhost:3000/posts?author=${this.$store.state.auth.user.username}`,
    });

    this.posts = res.data;
  },
};
</script>
