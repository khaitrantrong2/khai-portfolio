<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";
import NotchSection from "../../../components/NotchSection.vue";

const workChips = [
  "Claimback review",
  "AR monitoring",
  "GL analytics",
  "Finance controls",
  "Process automation",
  "Management visibility",
  "Reviewer-friendly workflows",
];
</script>

<template>
  <section class="profile" id="profile">
    <NotchSection class="profile-notch-start" />
    <div class="grid">
      <div class="profile-header">
        <span class="profile-label">Profile</span>
        <h2 class="profile-title">{{ t("about") }}</h2>
        <p class="profile-intro">{{ t("about-intro") }}</p>
      </div>
    </div>

    <div class="grid">
      <div class="profile-cards">
        <article class="profile-card">
          <span class="profile-card-tag">Profile Snapshot</span>
          <p class="profile-card-body">
            Based in Vietnam, with experience supporting cross-country finance operations across
            VN, SG, MY, ID, PH, and TH. Current focus areas include Value Protection, Claimback,
            Accounts Receivable, General Ledger review, finance controls, and process automation.
          </p>
        </article>

        <article class="profile-card">
          <span class="profile-card-tag">Background</span>
          <p class="profile-card-body">
            Audit and financial-statement review, internal controls, reconciliations,
            revenue-related review, and stakeholder management. This shapes how I approach
            automation: every tool should support traceability, reviewability, and better control.
          </p>
        </article>

        <article class="profile-card profile-card--work">
          <span class="profile-card-tag">What I Work On</span>
          <div class="profile-card-chips">
            <span class="profile-chip" v-for="chip in workChips" :key="chip">{{ chip }}</span>
          </div>
        </article>

        <article class="profile-card">
          <span class="profile-card-tag">Discipline &amp; Structure</span>
          <p class="profile-card-body">
            Completed military service in a military-region unit — strengthening discipline,
            structure, ownership, and execution under pressure.
          </p>
        </article>

        <article class="profile-card">
          <span class="profile-card-tag">Education &amp; Learning</span>
          <p class="profile-card-body">
            <strong>Hoa Sen University</strong> — Accounting &amp; Auditing · GPA 3.35 / 4.0<br />
            <strong>Swiss Coding Academy</strong> — Data Analytics
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
    font-family: "ProFontWindows", monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.45;
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.01em;
    font-size: var(--font-size-title-md);
    margin-top: var(--space-xs);
    margin-bottom: var(--space-md);

    @include mixins.mq("sm") { font-size: var(--font-size-title-lg); }
  }

  &-intro {
    font-size: var(--font-size-md);
    line-height: 1.6;
    max-width: 720px;
    opacity: 0.7;

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

  &-card {
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: rgba(255, 255, 255, 0.55);
    border-radius: var(--radius-md);
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.85);
      border-color: rgba(0, 0, 0, 0.14);
      transform: translateY(-2px);
    }

    &--work {
      @include mixins.mq("sm") { grid-column: 1 / -1; }
    }

    &-tag {
      font-family: "ProFontWindows", monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--color-text-cyan-600, #1a8a78);
      opacity: 0.85;
    }

    &-body {
      font-size: var(--font-size-md);
      line-height: 1.6;
      opacity: 0.8;

      strong { font-weight: 700; opacity: 1; }
    }

    &-chips {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
    }
  }

  &-chip {
    font-size: var(--font-size-sm);
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 100px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.6);
    white-space: nowrap;
  }
}
</style>
