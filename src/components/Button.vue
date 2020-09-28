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
    <button :disabled="disabled">{{ value }}</button>
    <i v-if="endIcon && !startIcon" class="material-icons">
      {{ endIcon }}
    </i>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "md"
    },
    variant: {
      type: String,
      default: "default"
    },
    value: {
      type: String,
      default: "default"
    },
    startIcon: String,
    endIcon: String,
    disabled: Boolean,
    disableShadow: Boolean
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

// Sizes
.sizeSm {
  padding: 6px 12px;
}

.sizeLg {
  padding: 12px 22px;
}

.disabled {
  background-color: #e0e0e0 !important;
  box-shadow: none !important;
  cursor: default !important;

  button {
    color: #9e9e9e !important;
    cursor: default !important;
  }

  &:hover,
  &:focus {
    background-color: #e0e0e0 !important;
  }
}

.disabledShadow {
  box-shadow: none;
}
</style>
