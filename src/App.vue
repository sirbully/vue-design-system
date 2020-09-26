<template>
  <div id="app">
    <Navigation />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Nav.vue";

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-size: 14px;
}

h2 {
  margin: 0 0 65px 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #4f4f4f;
}

a {
  text-decoration: none;
}

#app {
  display: flex;
  height: 100vh;
  font-family: "Noto Sans JP", sans-serif;
}

#content {
  padding-left: 80px;
  padding-right: 80px;
}

.text--code {
  font-family: "Ubuntu Mono", sans-serif;
  color: #333;

  &.--selector {
    color: #828282;
  }
}
</style>
