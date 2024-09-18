<template>
  <div class="show-card">
    <img :src="show.image.medium" :alt="show.name" />
    <h2 class="show-title">{{ show.name }}</h2>
    <p class="show-genres">{{ show.genres.join(", ") }}</p>
    <button class="view-details-button" @click="viewDetails">
      View Details
    </button>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  methods: {
    viewDetails() {
      this.$emit("view-details", this.show.id);
    },
  },
};
</script>

<style scoped>
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
</style>
