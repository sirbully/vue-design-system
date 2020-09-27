<template>
  <div class="inputs">
    <h2>Inputs</h2>
    <div class="bootstrap-wrapper">
      <h3>Options</h3>
      <div class="row mb-4">
        <div class="col-6">
          Color variants:
          <label>
            <input type="radio" value="primary" v-model="color" /> Primary
          </label>
          <label>
            <input type="radio" value="success" v-model="color" /> Success
          </label>
          <label>
            <input type="radio" value="warning" v-model="color" /> Warning
          </label>
          <label>
            <input type="radio" value="error" v-model="color" /> Error
          </label>
        </div>
        <div class="col-6">
          Sizes:
          <label>
            <input type="radio" value="sm" v-model="size" /> Small
          </label>
          <label>
            <input type="radio" value="md" v-model="size" /> Medium
          </label>
        </div>
        <div class="col-6">
          Icons:
          <label class="switch">
            <input type="checkbox" v-model="icons" />
            <span class="slider round"></span>
          </label>
          <div v-show="icons">
            <span>Start</span>
            <span>End</span>
          </div>
        </div>
        <div class="col-6">
          Full width:
          <label class="switch">
            <input type="checkbox" v-model="fullWidth" />
            <span class="slider round"></span>
          </label>
        </div>
        <div class="col-6">
          Disabled:
          <label class="switch">
            <input type="checkbox" v-model="disabled" />
            <span class="slider round"></span>
          </label>
        </div>
        <div class="col-6">
          Multiline:
          <label class="switch">
            <input type="checkbox" v-model="multiline" />
            <span class="slider round"></span>
          </label>
          <div v-show="multiline">Rows: <input type="text" /></div>
        </div>
        <div class="col-6">
          <div>
            Value:
            <input type="text" v-model="value" />
          </div>
          <div>
            Placeholder:
            <input type="text" v-model="placeholder" />
          </div>
        </div>
        <div class="col-6">
          <div>
            Label:
            <input type="text" v-model="label" />
          </div>
          <div>
            Helper text:
            <input type="text" v-model="helperText" />
          </div>
        </div>
      </div>

      <div>
        <p class="text--code">
          &lt;Input
          <span v-if="size">size="{{ size }}" </span>
          <span v-if="label">label="{{ label }}" </span>
          <span v-if="value">value="{{ value }}" </span>
          <span v-if="placeholder">placeholder="{{ placeholder }}" </span>
          <span v-if="helperText">helperText="{{ helperText }}" </span>
          <span v-if="fullWidth">fullWidth </span>
          <span v-if="disabled">disabled </span>
          /&gt;
        </p>
        <Input
          :size="size"
          :label="label"
          :value="value"
          :placeholder="placeholder"
          :helperText="helperText"
          :disabled="disabled"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";

export default {
  components: {
    Input
  },
  data: () => ({
    color: "primary",
    size: "md",
    icons: false,
    startIcon: "",
    endIcon: "",
    label: "Label",
    value: "Text",
    placeholder: "Placeholder",
    helperText: "Some interesting text",
    fullWidth: false,
    disabled: false,
    multiline: false,
    rows: "4"
  })
};
</script>

<style lang="scss" scoped>
.inputs {
  margin-top: 30px;
}

.mb-4 {
  margin-bottom: 4rem;
}
</style>
