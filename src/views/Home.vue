<template>
  <div class = "bodyHome flex">
      <Dashboard></Dashboard>
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard.vue";

export default {
  name: "Home",
  components: {
    Dashboard
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.bodyHome {
  height: 100%;
  min-height:820px;
  width: 100%;
  background-image: url("https://images8.alphacoders.com/105/1054256.jpg");
  background-position: center;
  background-size: cover;
  color: white;
}
</style>