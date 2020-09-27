<template>
  <div class="nav">
    <router-link to="/" exact>
      <p class="nav_heading"><span>Dev</span>challenges.io</p>
    </router-link>
    <ul class="nav_items">
      <li class="nav_item --strike">Typography</li>
      <li class="nav_item --strike">Grid</li>
      <li class="nav_item">
        <router-link to="/buttons">Buttons</router-link>
      </li>
      <li class="nav_item">
        <router-link to="/inputs">Inputs</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.nav {
  background: #fafbfd;
  color: #9e9e9e;
  padding: 43px 48px;
  width: 237px;

  &_heading {
    margin: 0 0 80px 0;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: #090f31;

    span {
      color: #f7542e;
    }
  }

  &_items {
    margin: 0;
    padding: 0;
  }

  &_item {
    width: max-content;
    margin-bottom: 30px;
    cursor: pointer;
    color: #9e9e9e;

    a {
      color: #9e9e9e;
    }

    .router-link-active {
      font-weight: 700;
      color: #090f31;
    }

    &.--strike {
      text-decoration: line-through;
      cursor: default;
    }
  }
}
</style>
