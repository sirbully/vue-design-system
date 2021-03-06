<template>
  <div
    class="button"
    :class="{
      clrPrimary: color == 'primary',
      clrSecondary: color == 'secondary',
      clrDanger: color == 'danger',
      sizeSm: size == 'sm',
      sizeLg: size == 'lg',
      varOutline: variant == 'outline',
      varText: variant == 'text',
      disabledShadow: disableShadow,
      disabled: disabled
    }"
  >
    <i v-if="startIcon && !endIcon" class="material-icons">
      {{ startIcon }}
    </i>
    <button v-bind="$attrs" :disabled="disabled">{{ value }}</button>
    <i v-if="endIcon && !startIcon" class="material-icons">
      {{ endIcon }}
    </i>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "md",
      validator: function(value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      }
    },
    color: {
      type: String,
      default: "default",
      validator: function(value) {
        return (
          ["default", "primary", "secondary", "danger"].indexOf(value) !== -1
        );
      }
    },
    variant: {
      type: String,
      default: "default",
      validator: function(value) {
        return ["default", "outline", "text"].indexOf(value) !== -1;
      }
    },
    startIcon: String,
    endIcon: String,
    disabled: {
      type: Boolean,
      default: false
    },
    disableShadow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  background-color: inherit;
  border: 0;
  font-family: "Noto Sans JP", sans-serif;
  border-radius: 6px;
  outline: 0;
  cursor: pointer;
}

i {
  font-size: 14px;
}

.button {
  display: flex;
  align-items: center;
  border-radius: 6px;
  background: #e0e0e0;
  color: #3f3f3f;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  max-width: max-content;
  padding: 8px 16px;
  cursor: pointer;

  &.clrPrimary {
    background-color: #2962ff;

    button,
    i {
      color: #fff;
    }

    &:hover,
    &:focus {
      background-color: #0039cb;
    }
  }

  &.clrSecondary {
    background-color: #455a64;

    button,
    i {
      color: #fff;
    }

    &:hover,
    &:focus {
      background-color: #1c313a;
    }
  }

  &.clrDanger {
    background-color: #d32f2f;

    button,
    i {
      color: #fff;
    }

    &:hover,
    &:focus {
      background-color: #9a0007;
    }
  }

  &:hover,
  &:focus {
    background-color: #aeaeae;
  }
}

// Variants
.varOutline {
  box-shadow: none;
  background-color: transparent;
  border: 1px solid #3f3f3f;

  &.clrPrimary {
    background-color: inherit;
    border: 1px solid #2962ff;

    button,
    i {
      background-color: transparent;
      color: #2962ff;
    }

    &:hover,
    &:focus {
      border-color: #2962ff;
      background-color: rgba(41, 98, 255, 0.1);
    }
  }

  &.clrSecondary {
    background-color: inherit;
    border: 1px solid #455a64;

    button,
    i {
      background-color: transparent;
      color: #455a64;
    }

    &:hover,
    &:focus {
      border-color: #455a64;
      background-color: rgba(69, 90, 100, 0.1);
    }
  }

  &.clrDanger {
    background-color: inherit;
    border: 1px solid #d32f2f;

    button,
    i {
      background-color: transparent;
      color: #d32f2f;
    }

    &:hover,
    &:focus {
      border-color: #d32f2f;
      background-color: rgba(211, 47, 47, 0.1);
    }
  }
}

.varText {
  background: transparent;
  box-shadow: none;

  &.clrPrimary {
    background-color: inherit;

    button,
    i {
      background-color: transparent;
      color: #2962ff;
    }

    &:hover,
    &:focus {
      background-color: rgba(41, 98, 255, 0.1);
    }
  }

  &.clrSecondary {
    background-color: inherit;

    button,
    i {
      background-color: transparent;
      color: #455a64;
    }

    &:hover,
    &:focus {
      background-color: rgba(69, 90, 100, 0.1);
    }
  }

  &.clrDanger {
    background-color: inherit;

    button,
    i {
      background-color: transparent;
      color: #d32f2f;
    }

    &:hover,
    &:focus {
      background-color: rgba(211, 47, 47, 0.1);
    }
  }
}

.disabled {
  &.clrPrimary,
  &.clrSecondary,
  &.clrDanger {
    background-color: #e0e0e0;
    border: none;
    box-shadow: none;
    cursor: default;

    button,
    i {
      color: #9e9e9e;
      cursor: default;
    }

    &:hover,
    &:focus {
      background-color: #e0e0e0;
    }
  }

  &.varOutline {
    background-color: transparent;
    border: 1px solid #e0e0e0;
    box-shadow: none;
    cursor: default;

    button,
    i {
      color: #9e9e9e;
      cursor: default;
    }

    &:hover,
    &:focus {
      background-color: transparent;
    }

    &.clrPrimary,
    &.clrSecondary,
    &.clrDanger {
      background-color: transparent;
      border: 1px solid #e0e0e0;
      box-shadow: none;
      cursor: default;

      button,
      i {
        color: #9e9e9e;
        cursor: default;
      }

      &:hover,
      &:focus {
        background-color: transparent;
      }
    }
  }

  &.varText {
    background: transparent;

    &:hover,
    &:focus {
      background-color: transparent;
    }
  }
}

// Sizes
.sizeSm {
  padding: 6px 12px;
}

.sizeLg {
  padding: 12px 22px;
}

.disabledShadow {
  box-shadow: none;
}
</style>
