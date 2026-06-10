<script setup lang="ts">
import Banner from "../../../components/Banner.vue";
import { preloaderVisible } from "../../../composables/usePreloader";
import { t } from "../../../i18n/utils/translate";
</script>

<template>
  <div class="hero">
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
          <h1 class="hero-title">Khai Tran</h1>
          <p class="hero-subtitle" v-if="!preloaderVisible">Finance Transformation &amp; Automation</p>
          <p class="hero-statement" v-if="!preloaderVisible">
            I turn complex finance operations into<br class="hero-br" /> scalable, automated, and review-friendly systems.
          </p>
          <div class="hero-badges" v-if="!preloaderVisible">
            <span class="hero-badge">Former EY Senior</span>
            <span class="hero-badge">Regional Finance Operations</span>
            <span class="hero-badge hero-badge--tech">Python · Power BI · NetSuite</span>
          </div>
          <Banner class="hero-banner" :copy="t('job-title')" v-if="!preloaderVisible" animated />
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
    height: 50%;

    @include mixins.landscape {
      height: 100%;

      @include mixins.mq("md") {
        padding-bottom: 28%;
      }

      @include mixins.mq("lg") {
        padding-bottom: 5%;
      }
    }

    &-inner {
      transform-origin: center center;
      grid-column: 1 / 13;
      gap: var(--space-xl);
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
        grid-column: 2 / 8;
        align-items: flex-start;
        width: fit-content;
      }
    }

    &-copys {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);

      @include mixins.mq("md") {
        gap: var(--space-md);
      }
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-lg);
    line-height: 1.0;

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

  &-subtitle {
    font-weight: 700;
    font-size: var(--font-size-title-xxs);
    letter-spacing: 0.04em;
    color: var(--color-cyan-400, #4dd9c0);
    text-transform: uppercase;
    margin-top: -4px;

    @include mixins.mq("md") {
      font-size: var(--font-size-title-xs);
    }
  }

  &-statement {
    font-size: var(--font-size-md);
    line-height: 1.55;
    max-width: 420px;
    opacity: 0.75;

    @include mixins.mq("md") {
      font-size: var(--font-size-lg);
    }
  }

  &-br {
    display: none;
    @include mixins.mq("md") {
      display: inline;
    }
  }

  &-badges {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-top: var(--space-xs);
  }

  &-badge {
    font-family: "ProFontWindows", monospace;
    font-size: 11px;
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid currentColor;
    color: var(--color-text-cyan-400, rgba(77,217,192,0.7));
    background: rgba(77, 217, 192, 0.07);
    white-space: nowrap;
    letter-spacing: 0.03em;

    &--tech {
      color: var(--color-white-400, rgba(255,255,255,0.5));
      border-color: var(--color-white-400, rgba(255,255,255,0.3));
      background: rgba(255,255,255,0.04);
    }
  }

  &-banner {
    position: absolute;
    bottom: 0;
    right: -16px;
    z-index: 10;
    transform: rotate(-5deg) translate(0, 65%);

    @include mixins.mq("sm") {
      right: -24px;
      transform: rotate(-5deg) translate(0, 70%);
    }

    @include mixins.mq("lg") {
      right: -32px;
      transform: rotate(-5deg) translate(0, 80%);
    }
  }
}
</style>
