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
    label: "Thailand IPO · 2022",
    value: "POPS Entertainment",
    desc: "Represented EY Vietnam on-site in Bangkok for 2 months — IFRS conversion, adjustment schedules, and cross-border coordination with EY Thailand on an IPO engagement for a leading entertainment & advertising group.",
  },
  {
    label: "EY Idols 2022",
    value: "Top 3",
    desc: "Firm-wide recognition for performance and leadership, competing across all service lines at EY Vietnam.",
  },
  {
    label: "Performance Rating",
    value: "4.5 / 5",
    desc: "Sustained rating across FY2020–FY2021, with ~180% chargeable utilization while managing multiple concurrent engagements.",
  },
  {
    label: "EuroCham Vietnam",
    value: "AGM Representative",
    desc: "Selected as EY Vietnam Audit Senior representative for EuroCham Vietnam AGM audits in 2021 and 2022.",
  },
  {
    label: "Regional Operations",
    value: "VN · SG · MY · ID · PH · TH",
    desc: "Currently overseeing finance operations across six Southeast Asian markets at Intrepid Asia.",
  },
  {
    label: "Data Certification",
    value: "SQL · Power BI · Python",
    desc: "Swiss Coding Academy Data Analytics program + HackerRank SQL (Intermediate). Applied to forecasting, planning, and automation workflows.",
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
          Finance systems, review workflows, and analytics prototypes — built to improve control,
          reduce manual effort, and give management clearer visibility into what's happening.
        </p>
      </div>
    </div>
    <div class="grid">
      <div class="projects-cards">
        <PreviewCard v-for="preview in loadedPreviews" :key="preview.title" :preview="preview" />
      </div>
    </div>
    <div class="grid">
      <div class="projects-confidential">
        <span class="projects-confidential-note">Visuals use recreated or anonymized data.</span>
      </div>
    </div>

    <!-- Career Highlights -->
    <div class="grid">
      <div class="projects-highlights">
        <span class="projects-highlights-label">Career Highlights</span>
        <h3 class="projects-highlights-title">{{ t("highlights") }}</h3>
        <p class="projects-highlights-intro">
          A few milestones across audit, international engagements, and continuous learning —
          the experiences that shaped how I think about finance and controls.
        </p>
        <div class="projects-highlights-grid">
          <div
            class="projects-highlight-card"
            v-for="h in highlights"
            :key="h.label"
          >
            <p class="projects-highlight-card-label">{{ h.label }}</p>
            <p class="projects-highlight-card-value">{{ h.value }}</p>
            <p class="projects-highlight-card-desc">{{ h.desc }}</p>
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
    @include mixins.mq("lg") { grid-column: 3 / 9; }

    &-copy {
      font-weight: 900;
      letter-spacing: -0.01em;
      font-size: var(--font-size-title-md);
      text-wrap: balance;

      @include mixins.mq("sm") { font-size: var(--font-size-title-lg); }
      @include mixins.mq("xl") { font-size: var(--font-size-title-xl); }
    }

    &-label {
      display: block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--color-text-200);
      margin-bottom: var(--space-xs);
    }

    &-intro {
      font-size: var(--font-size-md);
      line-height: 1.65;
      max-width: 600px;
      color: var(--color-text-300);
      margin-top: var(--space-md);

      @include mixins.mq("md") { font-size: var(--font-size-lg); }
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

  &-confidential {
    grid-column: 1 / span 12;

    @include mixins.mq("lg") { grid-column: 3 / span 8; }

    &-note {
      font-size: 12px;
      font-weight: 500;
      color: var(--color-text-200);
      font-style: italic;
      letter-spacing: 0.01em;
    }
  }

  /* Highlights section */
  &-highlights {
    grid-column: 1 / span 12;
    width: 100%;

    @include mixins.mq("lg") { grid-column: 3 / span 8; }

    &-label {
      display: block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--color-text-200);
      margin-bottom: var(--space-xs);
    }

    &-title {
      font-weight: 900;
      letter-spacing: -0.01em;
      font-size: var(--font-size-title-sm);
      margin-bottom: var(--space-sm);

      @include mixins.mq("sm") { font-size: var(--font-size-title-md); }
    }

    &-intro {
      font-size: var(--font-size-md);
      line-height: 1.65;
      max-width: 560px;
      color: var(--color-text-300);
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
    flex-direction: column;
    gap: 4px;
    padding: var(--space-md) var(--space-lg);
    border-radius: var(--radius-card);
    background: var(--color-card-bg);
    border: 1px solid var(--color-card-border);
    box-shadow: var(--shadow-card);
    transition:
      background 0.25s ease,
      box-shadow 0.25s ease,
      transform 0.25s ease;

    @include mixins.hover {
      &:hover {
        background: var(--color-card-bg-hover);
        border-color: var(--color-card-border-hover);
        box-shadow: var(--shadow-card-hover);
        transform: translateY(-2px);
      }
    }

    &-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-cyan-500);
    }

    &-value {
      font-size: var(--font-size-md);
      font-weight: 700;
      color: var(--color-text-400);
      line-height: 1.3;
    }

    &-desc {
      font-size: var(--font-size-sm);
      line-height: 1.55;
      color: var(--color-text-300);
      margin-top: 4px;
    }
  }
}
</style>
