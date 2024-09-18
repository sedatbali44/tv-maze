<template>
  <div
    class="show-list-container"
    :style="{ backgroundColor: backgroundColor }"
  >
    <h1 class="title">Popular TV Shows</h1>
    <div class="show-grid">
      <ShowCard
        v-for="show in shows"
        :key="show.id"
        :show="show"
        @view-details="viewDetails"
      />
    </div>
  </div>
</template>

<script>
import ShowCard from "@/components/ShowCard.vue";

export default {
  components: {
    ShowCard,
  },
  data() {
    return {
      shows: [],
      backgroundColor: "lightblue",
    };
  },
  created() {
    this.fetchShows();
  },
  methods: {
    fetchShows() {
      fetch("https://api.tvmaze.com/shows")
        .then((response) => response.json())
        .then((data) => {
          this.shows = data.slice(0, 9);
        });
    },
    viewDetails(id) {
      this.$router.push(`/show/${id}`);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;700&family=Roboto:wght@400&family=Montserrat:wght@700&display=swap");

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.show-list-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
}

.title {
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.show-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .show-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .show-grid {
    grid-template-columns: 1fr;
  }
}
</style>
