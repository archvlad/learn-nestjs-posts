<template>
  <div class="card block">
    <div class="card-content">
      <div class="columns is-vcentered is-mobile" style="margin-bottom: 5px">
        <div class="column is-narrow">
          <figure class="image is-48x48">
            <img
              :src="`https://api.dicebear.com/6.x/bottts/svg?seed=${post.author}23`"
              alt="avatar"
            />
          </figure>
        </div>
        <div class="column">
          <p class="subtitle">{{ post.author }}</p>
        </div>
      </div>
      <div class="content">
        <h3>{{ post.title }}</h3>
        <p>
          {{ post.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {},
  },
};
</script>
