<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { previews } from "../../../content/projects/previews";
import { locale } from "../../../i18n/store";
import PreviewCard from "../../projects/components/PreviewCard.vue";
import NotchSection from "../../../components/NotchSection.vue";
import { t } from "../../../i18n/utils/translate";

import type { ProjectPreview } from "../../../content/types";

const loadedPreviews = ref<ProjectPreview[] | null>(null);

const emit = defineEmits<{
  (e: "loaded", previews: ProjectPreview[]): void;
}>();

const loadPreviews = async () => {
  if (!locale.value) return;
  const func = previews[locale.value as keyof typeof previews];
  if (!func) return;
  const module = await func();
  loadedPreviews.value = module.default;
  emit("loaded", module.default);
};

watch(locale, loadPreviews);
onMounted(loadPreviews);

const highlights = [
  {
    icon: "★",
    label: "EY Idol 2022",
    value: "Top 3",
    desc: "Recognized in an internal talent and engagement competition during my EY journey.",
  },
  {
    icon: "◎",
    label: "EY Performance",
    value: "4.5 / 5",
    desc: "Performance rating reflecting strong ownership, execution, and professional growth.",
  },
  {
    icon: "◈",
    label: "Regional Scope",
    value: "VN · SG · MY · ID · PH · TH",
    desc: "Experience supporting finance operations across multiple Southeast Asian markets.",
  },
  {
    icon: "◆",
    label: "Military Service",
    value: "Military-region unit",
    desc: "Built discipline, structure, responsibility, and execution under pressure.",
  },
  {
    icon: "◉",
    label: "Education",
    value: "Hoa Sen University",
    desc: "Accounting & Auditing — GPA 3.35 / 4.0.",
  },
  {
    icon: "⬡",
    label: "Data Analytics",
    value: "Swiss Coding Academy",
    desc: "Data Analytics track focused on analytical thinking and practical data workflows.",
  },
];
</script>

<template>
  <div class="projects">
    <NotchSection class="projects-notch-start" />
    <NotchSection class="projects-notch-end" />
    <div class="grid">
      <div class="projects-title">
        <span class="projects-title-label">Selected Systems &amp; Case Studies</span>
        <h2 class="projects-title-copy">{{ t("projects") }}</h2>
        <p class="projects-title-intro">
          A collection of finance systems, review workflows, and analytics prototypes designed to
          improve control, visibility, and operational scalability.
        </p>
      </div>
    </div>
    <div class="grid">
      <div class="projects-cards">
        <PreviewCard v-for="preview in loadedPreviews" :key="preview.title" :preview="preview" />
      </div>
    </div>

    <!-- Career Highlights -->
    <div class="grid">
      <div class="projects-highlights">
        <h3 class="projects-highlights-title">Career Highlights</h3>
        <p class="projects-highlights-intro">
          Selected milestones that reflect a mix of finance foundation, execution discipline, and
          continuous learning.
        </p>
        <div class="projects-highlights-grid">
          <div
            class="projects-highlight-card"
            v-for="h in highlights"
            :key="h.label"
          >
            <span class="projects-highlight-card-icon">{{ h.icon }}</span>
            <div class="projects-highlight-card-body">
              <p class="projects-highlight-card-label">{{ h.label }}</p>
              <p class="projects-highlight-card-value">{{ h.value }}</p>
              <p class="projects-highlight-card-desc">{{ h.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
  padding-left: var(--space-outer);
  padding-right: var(--space-outer);
  background-color: var(--color-beige-400);
  min-height: calc(var(--lvh) * 100 + var(--radius-xxl));
  padding-top: 96px;
  padding-bottom: 96px;

  @include mixins.mq("md") {
    padding-top: 144px;
    padding-bottom: 144px;
    gap: var(--space-xxl);
  }

  @include mixins.mq("lg") {
    gap: var(--space-xxxl);
  }

  &-title {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;

    @include mixins.mq("md") { grid-column: 1 / 10; }
    @include mixins.mq("lg") { grid-column: 3 / 8; }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") { font-size: var(--font-size-title-lg); }
      @include mixins.mq("xl") { font-size: var(--font-size-title-xl); }
    }

    &-label {
      display: block;
      font-family: "ProFontWindows", monospace;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      opacity: 0.45;
      margin-bottom: var(--space-xs);
    }

    &-intro {
      font-size: var(--font-size-md);
      line-height: 1.6;
      max-width: 620px;
      opacity: 0.65;
      margin-top: var(--space-md);

      @include mixins.mq("md") { font-size: var(--font-size-lg); }
    }

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);

      @include mixins.mq("lg") {
        left: -16px;
        transform: translate(0, -20%) rotate(-6deg);
      }
    }
  }

  &-notch {
    &-start {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      color: var(--color-beige-400);
      --icon-color: var(--color-beige-400);
    }

    &-end {
      position: absolute;
      bottom: 0;
      left: 0;
      color: var(--color-beige-600);
      --icon-color: var(--color-beige-600);
    }
  }

  &-cards {
    max-width: 100%;
    flex: 1;
    grid-column: 1 / span 12;
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    @include mixins.mq("md") { grid-column: 1 / span 12; }

    @include mixins.mq("lg") {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-column: 3 / span 8;
    }

    @include mixins.mq("xl") {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }

  // Highlights section
  &-highlights {
    grid-column: 1 / span 12;
    width: 100%;

    @include mixins.mq("lg") { grid-column: 3 / span 8; }

    &-title {
      font-weight: 900;
      letter-spacing: 0.04em;
      margin-bottom: var(--space-sm);
      opacity: 0.5;
      text-transform: uppercase;
      font-size: 12px;
      font-family: "ProFontWindows", monospace;
    }

    &-intro {
      font-size: var(--font-size-md);
      line-height: 1.6;
      max-width: 560px;
      opacity: 0.6;
      margin-bottom: var(--space-lg);
    }

    &-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: var(--space-md);

      @include mixins.mq("md") {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  &-highlight-card {
    display: flex;
    align-items: flex-start;
    gap: var(--space-sm);
    padding: var(--space-md);
    border-radius: var(--radius-md);
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: rgba(255, 255, 255, 0.5);
    transition: background 0.2s ease, border-color 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.8);
      border-color: rgba(0, 0, 0, 0.14);
    }

    &-icon {
      font-size: 18px;
      line-height: 1;
      opacity: 0.4;
      flex-shrink: 0;
      margin-top: 2px;
    }

    &-body {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    &-label {
      font-size: var(--font-size-sm);
      font-weight: 700;
      opacity: 0.5;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-size: 10px;
      font-family: "ProFontWindows", monospace;
    }

    &-value {
      font-size: var(--font-size-md);
      font-weight: 600;
      line-height: 1.3;
    }

    &-desc {
      font-size: var(--font-size-sm);
      line-height: 1.5;
      opacity: 0.55;
      margin-top: 4px;
    }
  }
}
</style>
