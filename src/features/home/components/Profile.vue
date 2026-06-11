<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";
import NotchSection from "../../../components/NotchSection.vue";

const workChips = [
  "Claimback & Value Protection",
  "AR monitoring",
  "GL review & reconciliation",
  "Internal controls",
  "IFRS & VAS reporting",
  "Power BI dashboards",
  "Process automation",
  "Management reporting",
];
</script>

<template>
  <section class="profile" id="profile">
    <NotchSection class="profile-notch-start" />
    <div class="grid">
      <div class="profile-header">
        <span class="profile-label">About me</span>
        <h2 class="profile-title">{{ t("about") }}</h2>
        <p class="profile-intro">{{ t("about-intro") }}</p>
      </div>
    </div>

    <div class="grid">
      <div class="profile-cards">
        <article class="profile-card">
          <span class="profile-card-tag">Current role</span>
          <p class="profile-card-body">
            Finance Supervisor at Intrepid Asia, overseeing Value Protection, Claimback, and AR
            across six Southeast Asian markets — VN, SG, MY, ID, PH, TH. Focus on building
            reviewer-friendly workflows, tightening controls, and making financial data actionable
            for regional management.
          </p>
        </article>

        <article class="profile-card">
          <span class="profile-card-tag">EY foundation</span>
          <p class="profile-card-body">
            Four years as Senior Auditor at EY Vietnam: financial-statement audits (VAS &amp; IFRS),
            internal controls assessment, GL analytics, and engagement management across ~12
            engagements per year in multiple industries. Built a habit of tracing every number back
            to its source — a discipline I carry into every system I build now.
          </p>
        </article>

        <article class="profile-card profile-card--work">
          <span class="profile-card-tag">What I work on</span>
          <div class="profile-card-chips">
            <span class="profile-chip" v-for="chip in workChips" :key="chip">{{ chip }}</span>
          </div>
        </article>

        <article class="profile-card">
          <span class="profile-card-tag">Analytics &amp; tools</span>
          <p class="profile-card-body">
            Completed a Data Analytics program at Swiss Coding Academy — ETL pipelines with SQL,
            Python &amp; Power Query; EDA and anomaly detection; statistical forecasting; Power BI
            storytelling. HackerRank SQL (Intermediate) certified. Applying these directly to
            FP&amp;A and reporting automation.
          </p>
        </article>

        <article class="profile-card">
          <span class="profile-card-tag">Beyond finance</span>
          <p class="profile-card-body">
            Two years of military service in the Engineering Department, Region 7 — managing
            inventory planning, warehouse reporting, and operational budgets in a demanding,
            confidential setting. Sharpened the discipline and execution mindset I bring to every
            deadline.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.profile {
  position: relative;
  width: 100%;
  background-color: var(--color-beige-400);
  padding: 96px var(--space-outer);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  @include mixins.mq("md") {
    padding-top: 144px;
    padding-bottom: 144px;
    gap: var(--space-xxl);
  }

  &-notch-start {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    color: var(--color-beige-400);
    --icon-color: var(--color-beige-400);
  }

  &-header {
    grid-column: 1 / 13;

    @include mixins.mq("lg") { grid-column: 3 / 11; }
  }

  &-label {
    display: inline-block;
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
    font-size: var(--font-size-title-md);
    margin-bottom: var(--space-md);
    text-wrap: balance;

    @include mixins.mq("sm") { font-size: var(--font-size-title-lg); }
  }

  &-intro {
    font-size: var(--font-size-md);
    line-height: 1.65;
    max-width: 680px;
    color: var(--color-text-300);

    @include mixins.mq("md") { font-size: var(--font-size-lg); }
  }

  &-cards {
    grid-column: 1 / 13;
    display: grid;
    gap: var(--space-md);
    grid-template-columns: 1fr;

    @include mixins.mq("sm") { grid-template-columns: repeat(2, 1fr); }
    @include mixins.mq("lg") {
      grid-column: 3 / 11;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Double-bezel card shell */
  &-card {
    position: relative;
    border-radius: var(--radius-card);
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    transition:
      background 0.25s ease,
      box-shadow 0.25s ease,
      transform 0.25s ease;

    background: var(--color-card-bg);
    border: 1px solid var(--color-card-border);
    box-shadow: var(--shadow-card);

    @include mixins.hover {
      &:hover {
        background: var(--color-card-bg-hover);
        border-color: var(--color-card-border-hover);
        box-shadow: var(--shadow-card-hover);
        transform: translateY(-2px);
      }
    }

    &--work {
      @include mixins.mq("sm") { grid-column: 1 / -1; }
    }

    &-tag {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-cyan-500);
    }

    &-body {
      font-size: var(--font-size-md);
      line-height: 1.65;
      color: var(--color-text-300);

      strong {
        font-weight: 700;
        color: var(--color-text-400);
      }
    }

    &-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  }

  &-chip {
    font-size: 13px;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 100px;
    border: 1px solid rgba(0, 90, 160, 0.18);
    color: var(--color-dark-blue-500);
    background: rgba(255, 255, 255, 0.7);
    white-space: nowrap;
    letter-spacing: 0.01em;
  }
}
</style>
