<template>
  <div class="show-detail-container" v-if="show">
    <button class="back-button" @click="goBack">Back</button>
    <div class="show-content">
      <img :src="show.image.original" :alt="show.name" />
      <div class="show-info">
        <h1>{{ show.name }}</h1>
        <p><strong>Genres:</strong> {{ show.genres.join(", ") }}</p>
        <p><strong>Rating:</strong> {{ show.rating.average }}</p>
        <p><strong>Premiered:</strong> {{ show.premiered }}</p>
        <p v-html="show.summary"></p>
      </div>
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
    this.fetchShow();
  },
  methods: {
    fetchShow() {
      const showId = this.$route.params.id;
      fetch(`https://api.tvmaze.com/shows/${showId}`)
        .then((response) => response.json())
        .then((data) => {
          this.show = data;
        });
    },
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.show-detail-container {
  position: relative;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-family: "Roboto", sans-serif;
}

.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff4081;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  z-index: 10;
}

.back-button:hover {
  background-color: #e7326b;
}

.show-content {
  display: flex;
  flex-wrap: wrap;
}

.show-detail-container img {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  margin-right: 20px;
}

.show-info {
  text-align: left;
  flex: 1;
}

.show-info h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  color: #333;
}

.show-info p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #555;
}

.show-info strong {
  color: #333;
}

@media (max-width: 768px) {
  .show-content {
    flex-direction: column;
    align-items: center;
  }

  .show-detail-container img {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
