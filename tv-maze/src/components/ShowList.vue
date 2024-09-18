<template>
  <div
    class="show-list-container"
    :style="{ backgroundColor: backgroundColor }"
  >
    <h1 class="title">Popular TV Shows</h1>
    <div class="show-grid">
      <div class="show-card" v-for="show in shows" :key="show.id">
        <img :src="show.image.medium" :alt="show.name" />
        <h2 class="show-title">{{ show.name }}</h2>
        <p class="show-genres">{{ show.genres.join(", ") }}</p>
        <button class="view-details-button" @click="viewDetails(show.id)">
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shows: [],
      backgroundColor: "lightblue",
    };
  },
  created() {
    // Fetching the TV shows from TVMaze API
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

.show-title {
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  color: #444;
  text-transform: capitalize;
}

.show-genres {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: #666;
}

.view-details-button {
  background-color: #ff4081;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.view-details-button:hover {
  background-color: #e7326b;
}

/* Responsive Design */
@media (max-width: 768px) {
  .show-grid {
    grid-template-columns: repeat(
      2,
      1fr
    ); 
  }

  .title {
    font-size: 2rem;
  }

  .show-title {
    font-size: 1.4rem;
  }

  .show-genres {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .show-grid {
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 1.5rem;
  }

  .show-title {
    font-size: 1.2rem;
  }

  .show-genres {
    font-size: 0.8rem;
  }

  .view-details-button {
    padding: 8px 16px;
  }
}
</style>
