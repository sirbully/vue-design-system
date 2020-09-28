<template>
  <div class="buttons">
    <h2>Buttons</h2>
    <div class="bootstrap-wrapper">
      <div class="mb-1">
        <h3>Options</h3>
        <small>
          For icons, please refer to this page for possible values:
          <a href="https://material.io/resources/icons/">
            https://material.io/resources/icons/
          </a>
        </small>
      </div>
      <div class="row mb-4">
        <div class="col-5">
          Colors:
          <label>
            <input type="radio" value="default" v-model="color" /> Default
          </label>
          <label>
            <input type="radio" value="primary" v-model="color" /> Primary
          </label>
          <label>
            <input type="radio" value="secondary" v-model="color" />
            Secondary
          </label>
          <label>
            <input type="radio" value="danger" v-model="color" /> Danger
          </label>
        </div>
        <div class="col-5">
          Variants:
          <label>
            <input type="radio" value="default" v-model="variant" /> Default
          </label>
          <label>
            <input type="radio" value="outline" v-model="variant" /> Outline
          </label>
          <label>
            <input type="radio" value="text" v-model="variant" /> Text
          </label>
        </div>
        <div class="col-5">
          Sizes:
          <label>
            <input type="radio" value="sm" v-model="size" /> Small
          </label>
          <label>
            <input type="radio" value="md" v-model="size" /> Medium
          </label>
          <label>
            <input type="radio" value="lg" v-model="size" /> Large
          </label>
        </div>
        <div class="col-5">
          Icons: <input type="checkbox" v-model="icons" />
          <span v-show="icons">
            <label>
              <input type="radio" value="start" v-model="icon" /> Start
            </label>
            <input v-show="icon === 'start'" type="text" v-model="startIcon" />
            <label>
              <input type="radio" value="end" v-model="icon" /> End
            </label>
            <input v-show="icon === 'end'" type="text" v-model="endIcon" />
          </span>
        </div>
        <div class="col-5">
          Disabled: <input type="checkbox" v-model="disabled" />
        </div>
        <div class="col-5">
          Value:
          <input type="text" v-model="value" />
        </div>
        <div class="col-5">
          Disable shadow: <input type="checkbox" v-model="noShadow" />
        </div>
      </div>

      <div>
        <p class="text--code">
          &lt;Button
          <span v-if="value">value="{{ value }}" </span>
          <span v-if="color && color !== 'default'">color="{{ color }}" </span>
          <span v-if="variant">variant="{{ variant }}" </span>
          <span v-if="size">size="{{ size }}" </span>
          <span v-if="icons && icon === 'start'">
            startIcon="{{ startIcon }}"
          </span>
          <span v-if="icons && icon === 'end'"> endIcon="{{ endIcon }}" </span>
          <span v-if="noShadow">disableShadow </span>
          <span v-if="disabled">disabled </span>
          /&gt;
        </p>
        <Button
          :color="color"
          :size="size"
          :variant="variant"
          :startIcon="icons && icon !== 'end' ? startIcon : null"
          :endIcon="icons && icon !== 'start' ? endIcon : null"
          :value="value"
          :disabled="disabled"
          :disableShadow="noShadow"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button
  },
  data: () => ({
    color: "",
    size: "",
    variant: "",
    icons: false,
    icon: "start",
    startIcon: "call",
    endIcon: "lock",
    value: "Default",
    disabled: false,
    noShadow: false
  })
};
</script>

<style lang="scss" scoped>
.buttons {
  margin-top: 30px;
}

.mb-1 {
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 4rem;
}
</style>
