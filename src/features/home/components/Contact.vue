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

const openToRoles = [
  "Finance Transformation",
  "Finance Automation",
  "Regional Finance Operations",
  "FP&A / Finance Analytics",
  "Accounting Controls & GL Review",
];
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-content">
      <h2 class="contact-title" v-html="t('lets-work-together')"></h2>

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

      <div class="contact-open-to">
        <p class="contact-open-to-label">Open to</p>
        <div class="contact-open-to-chips">
          <span
            v-for="role in openToRoles"
            :key="role"
            class="contact-chip"
          >{{ role }}</span>
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
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") { font-size: var(--font-size-title-lg); }
    @include mixins.mq("xl") { font-size: var(--font-size-title-xl); }
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
      font-family: "ProFontWindows", monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      opacity: 0.45;
      min-width: 70px;
    }

    &-value {
      font-size: var(--font-size-md);
      font-weight: 600;
    }

    &-link {
      text-decoration: none;
      color: inherit;
      border-bottom: 1px solid currentColor;
      opacity: 0.8;
      transition: opacity 0.2s;

      &:hover { opacity: 1; }
    }
  }

  &-open-to {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    &-label {
      font-family: "ProFontWindows", monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      opacity: 0.45;
    }
  }

  &-open-to-chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
  }

  &-chip {
    font-size: var(--font-size-sm);
    font-weight: 600;
    padding: 5px 12px;
    border-radius: 100px;
    border: 1px solid currentColor;
    opacity: 0.65;
    white-space: nowrap;
    transition: opacity 0.2s;

    &:hover { opacity: 1; }
  }
}
</style>
