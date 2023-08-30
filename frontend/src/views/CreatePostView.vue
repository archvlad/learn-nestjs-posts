<template>
  <div style="max-width: 600px; margin: auto">
    <div class="level is-mobile">
      <div class="level-left">
        <h1 class="title">Create Post</h1>
      </div>
      <div class="level-right">
        <button class="button">Cancel</button>
      </div>
    </div>
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" type="text" v-model="post.title" />
      </div>
    </div>

    <div class="field">
      <label class="label">Content</label>
      <div class="control">
        <textarea class="textarea" v-model="post.body"></textarea>
      </div>
    </div>

    <div class="control">
      <button class="button is-primary" @click="handlePublish">Publish</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
        author: this.$store.state.auth.user.username,
      },
    };
  },
  methods: {
    async handlePublish(event) {
      event.preventDefault();
      let res = await axios.post('/posts', this.post);
      if (res.data._id) {
        this.$router.push('/profile');
      }
    },
  },
};
</script>
