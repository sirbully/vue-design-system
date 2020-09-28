<template>
  <div class="inputs">
    <h2>Inputs</h2>
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
        <div class="col-6">
          <table>
            <tr>
              <td>Colors:</td>
              <td>
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
              </td>
            </tr>
          </table>
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
        <div class="col-6">
          Full width: <input type="checkbox" v-model="fullWidth" />
        </div>
        <div class="col-6">
          Disabled: <input type="checkbox" v-model="disabled" />
        </div>
        <div class="col-6">
          Multiline: <input type="checkbox" v-model="multiline" />
          <span v-show="multiline">
            Rows: <input type="text" v-model="rows" />
          </span>
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
          <span v-if="icons && icon === 'start'">
            startIcon="{{ startIcon }}"
          </span>
          <span v-if="icons && icon === 'end'"> endIcon="{{ endIcon }}" </span>
          <span v-if="color && color !== 'primary'">{{ color }} </span>
          <span v-if="fullWidth">fullWidth </span>
          <span v-if="multiline">multiline </span>
          <span v-if="rows && multiline">rows="{{ rows }}" </span>
          <span v-if="disabled">disabled </span>
          /&gt;
        </p>
        <Input
          :size="size"
          :label="label"
          :placeholder="placeholder"
          :helperText="helperText"
          :startIcon="icons && icon !== 'end' ? startIcon : null"
          :endIcon="icons && icon !== 'start' ? endIcon : null"
          :disabled="disabled"
          :value="value"
          :error="color === 'error'"
          :color="color"
          :multiline="multiline"
          :rows="rows"
          :fullWidth="fullWidth"
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
    icon: "start",
    startIcon: "call",
    endIcon: "lock",
    label: "Label",
    value: "Initial text",
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

.mb-1 {
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 4rem;
}
</style>
