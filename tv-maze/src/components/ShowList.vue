<template>
  <div class="show-list-container">
    <h1>Popular TV Shows</h1>
    <div class="show-grid">
      <div class="show-card" v-for="show in shows" :key="show.id">
        <img :src="show.image.medium" :alt="show.name" />
        <h2>{{ show.name }}</h2>
        <p>{{ show.genres.join(", ") }}</p>
        <button @click="viewDetails(show.id)">View Details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shows: [], // Will hold the fetched show data
    };
  },
  created() {
    // Fetching the TV shows from TVMaze API
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        this.shows = data.slice(0, 9); // Display only 9 shows for a 3x3 grid
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
.show-list-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.show-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Creates a 3-column grid */
  gap: 20px; /* Adds space between grid items */
}

.show-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease;
}

.show-card:hover {
  transform: scale(1.05);
}

.show-card img {
  width: 100%;
  border-radius: 10px;
}

.show-card h2 {
  font-size: 1.5rem;
  margin: 10px 0;
  color: #333;
}

.show-card p {
  font-size: 1rem;
  color: #777;
}

button {
  background-color: #ff4081;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #e7326b;
}
</style>
