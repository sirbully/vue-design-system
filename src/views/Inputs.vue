<template>
  <div class="inputs">
    <h2>Inputs</h2>
    <div class="bootstrap-wrapper">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3">
          <p class="text--code">&lt;Input /&gt;</p>
          <Input />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <p class="text--code">&lt;Input error /&gt;</p>
          <Input error />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <p class="text--code">&lt;Input disabled /&gt;</p>
          <Input disabled />
        </div>
        <!-- <div class="col-sm-12 col-md-6 col-lg-3">
          <p class="text--code --selector">&amp;:hover</p>
          <Input />
        </div> -->
        <!-- <div class="col-sm-12 col-md-6 col-lg-3">
          <p class="text--code --selector">&amp;:focus</p>
          <Input />
        </div> -->
      </div>

      <div class="row">
        <div class="col-md-12 col-lg-5">
          <p class="text--code">
            &lt;Input helperText="Some interesting text"/&gt;
          </p>
          <Input helperText="Some interesting text" />
        </div>
        <div class="col-md-12 col-lg-5">
          <p class="text--code">
            &lt;Input helperText="Some interesting text" error /&gt;
          </p>
          <Input helperText="Some interesting text" error />
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 col-lg-5">
          <p class="text--code">
            &lt;Input value="text" /&gt;
          </p>
          <Input value="text" />
        </div>
        <div class="col-md-12 col-lg-5">
          <p class="text--code">
            &lt;Input multiline rows="4" /&gt;
          </p>
          <Input multiline rows="4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";

export default {
  components: {
    Input
  }
};
</script>

<style lang="scss" scoped>
.inputs {
  margin-top: 30px;
}
</style>
