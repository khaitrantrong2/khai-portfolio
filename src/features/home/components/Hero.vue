<script setup lang="ts">
import { preloaderVisible } from "../../../composables/usePreloader";
</script>

<template>
  <div class="hero">
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
          <span class="hero-eyebrow" v-if="!preloaderVisible">Finance Transformation, Controls &amp; Automation</span>
          <h1 class="hero-title">Khai Tran</h1>
          <p class="hero-role" v-if="!preloaderVisible">Finance Supervisor — Value Protection, Claimback &amp; AR</p>
          <p class="hero-statement" v-if="!preloaderVisible">
            I build structured finance systems that improve control, visibility, and scalability.
          </p>
          <div class="hero-chips" v-if="!preloaderVisible">
            <span class="hero-chip">Former EY Senior</span>
            <span class="hero-chip">Regional Finance Operations</span>
            <span class="hero-chip hero-chip--tech">Python • Power BI • NetSuite</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  max-height: calc(var(--lvh) * 100);
  height: calc(var(--lvh) * 100);
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  &-content {
    align-items: center;
    justify-content: center;
    height: 52%;

    @include mixins.landscape {
      height: 100%;

      @include mixins.mq("md") {
        padding-bottom: 26%;
      }

      @include mixins.mq("lg") {
        padding-bottom: 4%;
      }
    }

    &-inner {
      transform-origin: center center;
      grid-column: 1 / 13;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: fit-content;
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      @include mixins.landscape {
        left: 0;
        transform: translateX(0);
        grid-column: 2 / 9;
        align-items: flex-start;
        width: fit-content;
      }
    }

    &-copys {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);

      @include mixins.landscape {
        align-items: flex-start;
      }
    }
  }

  &-eyebrow {
    font-family: "ProFontWindows", monospace;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-text-cyan-400, rgba(77, 217, 192, 0.85));
    margin-bottom: 2px;
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.01em;
    line-height: 0.95;
    font-size: var(--font-size-title-lg);

    @include mixins.landscape {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.landscape-large {
      @include mixins.mq("sm") {
        font-size: var(--font-size-title-xl);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xxl);
      }
    }
  }

  &-role {
    font-weight: 700;
    font-size: var(--font-size-md);
    text-align: center;
    opacity: 0.85;

    @include mixins.landscape {
      text-align: left;
      font-size: var(--font-size-lg);
    }
  }

  &-statement {
    font-size: var(--font-size-md);
    line-height: 1.55;
    max-width: 440px;
    text-align: center;
    opacity: 0.6;
    margin-top: 2px;

    @include mixins.landscape {
      text-align: left;
    }
  }

  &-chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-xs);
    margin-top: var(--space-sm);

    @include mixins.landscape {
      justify-content: flex-start;
    }
  }

  &-chip {
    font-family: "ProFontWindows", monospace;
    font-size: 11px;
    padding: 5px 12px;
    border-radius: var(--radius-sm, 6px);
    border: 1px solid var(--color-cyan-400, rgba(77, 217, 192, 0.5));
    color: var(--color-text-cyan-400, rgba(77, 217, 192, 0.85));
    background: rgba(77, 217, 192, 0.06);
    white-space: nowrap;
    letter-spacing: 0.04em;

    &--tech {
      color: rgba(255, 255, 255, 0.6);
      border-color: rgba(255, 255, 255, 0.25);
      background: rgba(255, 255, 255, 0.04);
    }
  }
}
</style>
