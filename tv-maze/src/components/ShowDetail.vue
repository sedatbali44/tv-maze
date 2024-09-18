<template>
  <div class="show-detail-container" v-if="show">
    <img :src="show.image.original" :alt="show.name" />
    <div class="show-info">
      <h1>{{ show.name }}</h1>
      <p><strong>Genres:</strong> {{ show.genres.join(", ") }}</p>
      <p><strong>Rating:</strong> {{ show.rating.average }}</p>
      <p><strong>Premiered:</strong> {{ show.premiered }}</p>
      <p v-html="show.summary"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: null,
    };
  },
  created() {
    const showId = this.$route.params.id;
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => {
        this.show = data;
      });
  },
};
</script>

<style scoped>
.show-detail-container {
  display: flex;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.show-detail-container img {
  width: 400px;
  border-radius: 10px;
  margin-right: 20px;
}

.show-info {
  text-align: left;
}

.show-info h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.show-info p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 10px;
}

.show-info strong {
  color: #333;
}
</style>
