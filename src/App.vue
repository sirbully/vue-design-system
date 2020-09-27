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
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  font-family: "Noto Sans JP", sans-serif;
}

#content {
  width: 100%;
  padding-right: 80px;
  padding-left: 80px;
}

.text--code {
  font-family: "Ubuntu Mono", sans-serif;
  color: #333;
  margin-top: 0;

  &.--selector {
    color: #828282;
  }
}
</style>
