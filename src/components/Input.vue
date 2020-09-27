<template>
  <div class="input" :class="{ error: error }">
    <label>
      <span>{{ label }}</span>
      <div class="input_box">
        <textarea v-if="multiline" v-bind="$attrs" v-model="value"></textarea>
        <div class="--text" v-else>
          <i v-if="startIcon" class="material-icons">{{ startIcon }}</i>
          <input
            v-bind="$attrs"
            :type="type"
            :placeholder="placeholder"
            v-model="value"
          />
          <i v-if="endIcon" class="material-icons">{{ endIcon }}</i>
        </div>
      </div>
      <small>{{ helperText }}</small>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Label"
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    },
    value: String,
    helperText: String,
    startIcon: String,
    endIcon: String,
    error: Boolean,
    multiline: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
input,
textarea {
  border: 0;
  outline: 0;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;
  color: #333;
  padding: 15px 5px;
  width: 100%;

  &::placeholder {
    color: #828282;
  }
}

small {
  color: #828282;
}

.input {
  margin-bottom: 4rem;
}

.input_box {
  padding: 3px 7px;
  display: flex;
  border: 1px solid #828282;
  border-radius: 8px;
  width: 200px;

  .--text {
    display: flex;
    align-items: center;
  }
}

.error {
  .input_box {
    border-color: #d32f2f;
  }

  label,
  small {
    color: #d32f2f;
  }
}
</style>
