<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import Social from "../../../components/Social.vue";

const contactElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if (contactElement.value) {
    transitions.contact.setup(contactElement.value);
  }
});

onUnmounted(() => {
  transitions.contact.destroy();
});
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-content">
      <h2 class="contact-title" v-html="t('lets-work-together')"></h2>

      <p class="contact-lead">
        Finance, controls, analytics, or just a good conversation about building better systems —
        always happy to connect.
      </p>

      <div class="contact-info">
        <div class="contact-info-row">
          <span class="contact-info-label">Email</span>
          <a href="mailto:khai.trantrong2@gmail.com" class="contact-info-value contact-info-link">
            khai.trantrong2@gmail.com
          </a>
        </div>
        <div class="contact-info-row">
          <span class="contact-info-label">Location</span>
          <span class="contact-info-value">Vietnam</span>
        </div>
      </div>

      <Social variant="background" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  overflow: hidden;
  min-height: calc(var(--lvh) * 100);
  padding: var(--space-outer);
  padding-top: var(--space-lg);

  @include mixins.mq("md") { padding-top: var(--space-xxl); }

  &-content {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);

    @include mixins.mq("sm") { grid-column: 1 / 9; }

    @include mixins.mq("md") {
      gap: var(--space-xl);
      grid-column: 1 / 7;
      padding-top: var(--space-lg);
    }

    @include mixins.mq("lg") { grid-column: 2 / 7; }
  }

  &-title {
    font-weight: 900;
    letter-spacing: -0.01em;
    font-size: var(--font-size-title-md);
    text-wrap: balance;

    @include mixins.mq("sm") { font-size: var(--font-size-title-lg); }
    @include mixins.mq("xl") { font-size: var(--font-size-title-xl); }
  }

  &-lead {
    font-size: var(--font-size-md);
    line-height: 1.65;
    max-width: 440px;
    color: var(--color-text-300);

    @include mixins.mq("md") { font-size: var(--font-size-lg); }
  }

  &-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    &-row {
      display: flex;
      align-items: center;
      gap: var(--space-md);
    }

    &-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-text-200);
      min-width: 70px;
    }

    &-value {
      font-size: var(--font-size-md);
      font-weight: 600;
      color: var(--color-text-400);
    }

    &-link {
      text-decoration: none;
      color: inherit;
      border-bottom: 1px solid rgba(45, 42, 36, 0.3);
      transition: border-color 0.2s, color 0.2s;

      &:hover {
        color: var(--color-dark-blue-500);
        border-color: var(--color-dark-blue-500);
      }
    }
  }
}
</style>
