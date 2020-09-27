<template>
  <div
    class="input"
    :class="{
      error: error,
      disabled: disabled,
      hovered: isHovered,
      primary: color === 'primary' && isFocused,
      success: color === 'success',
      warning: color === 'warning',
      fullwidth: fullWidth,
      sizeSm: size === 'sm'
    }"
  >
    <label>
      <span>{{ label }}</span>
      <div class="input_box">
        <textarea
          v-if="multiline"
          v-bind="$attrs"
          :rows="rows"
          :disabled="disabled"
          :value="value"
        >
        </textarea>
        <div class="--text" v-else>
          <i v-if="startIcon && !endIcon" class="material-icons">
            {{ startIcon }}
          </i>
          <input
            v-bind="$attrs"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :value="value"
            @focus="isFocused = true"
            @blur="isFocused = false"
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
          />
          <i v-if="endIcon && !startIcon" class="material-icons">
            {{ endIcon }}
          </i>
        </div>
      </div>
      <small>{{ helperText }}</small>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary"
    },
    type: {
      type: String,
      default: "text"
    },
    size: {
      type: String,
      default: "md"
    },
    label: String,
    placeholder: String,
    value: String,
    helperText: String,
    startIcon: String,
    endIcon: String,
    rows: String,
    fullWidth: Boolean,
    error: Boolean,
    disabled: Boolean,
    multiline: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isFocused: false,
    isHovered: false
  })
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

textarea {
  resize: vertical;
}

small {
  color: #828282;
}

.input {
  margin-bottom: 4rem;
  width: max-content;
}

.input_box {
  padding: 3px 7px;
  display: flex;
  border: 1px solid #828282;
  border-radius: 8px;
  min-width: 200px;

  i {
    color: #828282;
  }

  .--text {
    display: flex;
    align-items: center;
    width: 100%;
  }
}

.sizeSm {
  textarea,
  input {
    padding: 7px 5px;
  }
}

.fullwidth {
  width: 100%;

  .input_box {
    width: 100%;
  }

  textarea {
    max-width: 100%;
    resize: vertical;
  }
}

// Color variants
.hovered {
  .input_box {
    border-color: #111;
  }

  i {
    color: #333;
  }
}

.primary {
  .input_box {
    border-color: #2962ff;
  }

  label,
  small,
  i {
    color: #2962ff;
  }
}

.success {
  .input_box {
    border-color: #5cb85c;
  }

  label,
  small,
  i,
  input {
    color: #5cb85c;
  }
}

.warning {
  .input_box {
    border-color: #f0ad4e;
  }

  label,
  small,
  i,
  input {
    color: #f0ad4e;
  }
}

.error {
  .input_box {
    border-color: #d32f2f;
  }

  label,
  small,
  i,
  input {
    color: #d32f2f;
  }
}

.disabled {
  .input_box {
    border-color: #e0e0e0 !important;
    background: #f2f2f2 !important;
    color: #828282 !important;
  }

  label,
  small,
  i,
  input {
    color: #828282;
  }
}
</style>
