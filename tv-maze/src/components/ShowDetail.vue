<template>
  <div v-if="show">
    <h1>{{ show.name }}</h1>
    <p>{{ show.summary }}</p>
    <img :src="show.image.medium" alt="show poster" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      show: null,
    };
  },
  async mounted() {
    const showId = this.$route.params.id;
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${showId}`
      );
      this.show = response.data;
    } catch (error) {
      console.error("Failed to fetch show details", error);
    }
  },
};
</script>
