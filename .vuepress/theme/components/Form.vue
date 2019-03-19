<template>
  <div class="feedback">
    <div class="helptext">
      <h3>Did you find this doc useful?</h3>
      <p>Your feedback helps us improve these docs</p>
    </div>
    <div class="feedback-icons">
      <form name="upvote" method="POST" netlify>
        <button type="submit" v-on:click="votes">
          <img src="./illo-thumb-up.svg" alt>
        </button>
      </form>
      <form name="downvote" method="POST" netlify>
        <span v-on:click="votes" type="submit">
          <img src="./illo-thumb-down.svg" alt>
        </span>
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
  methods: {
    votes: function(e) {
      e.preventDefault();
      let count = 0;
      count += 1;
      console.log(count);
    }
  }
};
</script>
