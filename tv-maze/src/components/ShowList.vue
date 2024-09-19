<template>
  <div
    class="show-list-container"
    :style="{ backgroundColor: backgroundColor }"
  >
    <h1 class="title">Popular TV Shows</h1>
    <input
      v-model="searchQuery"
      class="search-bar"
      type="text"
      placeholder="Search TV Shows..."
    />

    <div class="show-grid">
      <ShowCard
        v-for="show in filteredShows"
        :key="show.id"
        :show="show"
        @view-details="viewDetails"
      />
    </div>
  </div>
</template>

<script>
import ShowCard from "./ShowCard.vue";

export default {
  components: {
    ShowCard,
  },
  data() {
    return {
      shows: [],
      backgroundColor: "lightblue",
      searchQuery: "",
    };
  },
  computed: {
    filteredShows() {
      return this.shows.filter((show) =>
        show.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  created() {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        this.shows = data.slice(0, 9);
      });
  },
  methods: {
    viewDetails(id) {
      this.$router.push(`/show/${id}`);
    },
  },
};
</script>

<style scoped>
.search-bar {
  padding: 15px;
  width: 60%; /* Reduced width to 60% for a smaller horizontal size */
  margin: 20px auto; /* Centered the search bar horizontally */
  border-radius: 25px;
  border: 2px solid #ddd;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.search-bar:focus {
  outline: none;
  border-color: #ff4081;
  box-shadow: 0 0 10px rgba(255, 64, 129, 0.5);
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
  margin-bottom: 20px;
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

  .title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .show-grid {
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 1.5rem;
  }

  .search-bar {
    font-size: 1rem;
    padding: 12px;
  }
}
</style>
