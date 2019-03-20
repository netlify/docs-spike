<template>
  <div class="feedback">
    <div class="helptext">
      <h3>Did you find this doc useful?</h3>
      <p>Your feedback helps us improve these docs</p>
    </div>
    <div class="feedback-icons">
      <form name="upvote" method="POST" netlify id="upvote-form" @submit.prevent="handleSubmit">
        <input type="hidden" name="form-name" value="upvote">
        <img src="./illo-thumb-up.svg" alt v-on:click="votes">
      </form>
      <form name="downvote" method="POST" netlify id="downvote-form">
        <input type="hidden" name="form-name" value="downvote">
        <img src="./illo-thumb-down.svg" alt v-on:click="votes">
      </form>
    </div>
  </div>
</template>

<style scoped>
.feedback {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #eaecef;
  border-bottom: 1px solid #eaecef;
}

.helptext {
  padding: 2rem 6rem 2rem 0;
}

h3,
p {
  line-height: 0.5;
}

form {
  display: inline;
}
</style>

<script>
export default {
  data() {
    return {
      upvoteCount: 0
    };
  },
  methods: {
    votes: function(e) {
      this.upvoteCount = e.target.value;
      console.log(e.target.value);
    }
  }
};
</script>
