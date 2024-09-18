<template>
  <div>
    <h1>Popüler TV Şovları</h1>
    <ul>
      <li v-for="show in shows" :key="show.id">
        <a @click="selectShow(show.id)" href="#">{{ show.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      shows: [],
    };
  },
  mounted() {
    this.getPopularShows();
  },
  methods: {
    async getPopularShows() {
      try {
        const response = await axios.get("https://api.tvmaze.com/shows");
        this.shows = response.data.slice(0, 10); // İlk 10 TV şovunu alıyoruz
      } catch (error) {
        console.error("API request failed", error);
      }
    },
    selectShow(showId) {
      this.$router.push(`/show/${showId}`);
    },
  },
};
</script>

<style scoped></style>
