<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch } from "vue";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { preloaderVisible } from "../../../composables/usePreloader";

gsap.registerPlugin(SplitText, CustomEase);

// Signature eases — idempotent if already registered in intro.ts
if (!CustomEase.get("khai.reveal")) {
  CustomEase.create("khai.reveal", "0.16, 1, 0.3, 1");
}
if (!CustomEase.get("khai.fade")) {
  CustomEase.create("khai.fade", "0.4, 0, 0.2, 1");
}

let ctx: gsap.Context | null = null;

const runHeroReveal = () => {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Make everything visible without animation
    const els = document.querySelectorAll<HTMLElement>(
      ".hero-eyebrow, .hero-role, .hero-statement, .hero-chip",
    );
    els.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  ctx?.revert();

  ctx = gsap.context(() => {
    const titleEl = document.querySelector<HTMLElement>(".hero-title");
    const eyebrowEl = document.querySelector<HTMLElement>(".hero-eyebrow");
    const roleEl = document.querySelector<HTMLElement>(".hero-role");
    const statementEl = document.querySelector<HTMLElement>(".hero-statement");
    const chipsEl = document.querySelector<HTMLElement>(".hero-chips");

    if (!titleEl) return;

    const split = new SplitText(titleEl, { type: "chars" });

    gsap.set([eyebrowEl, roleEl, statementEl, chipsEl].filter(Boolean), {
      opacity: 0,
      y: 14,
    });
    gsap.set(split.chars, { opacity: 0, y: 32, rotateX: -18 });

    const tl = gsap.timeline({ delay: 0.15 });

    if (eyebrowEl) {
      tl.to(eyebrowEl, { opacity: 1, y: 0, duration: 0.55, ease: "khai.fade" }, 0);
    }

    tl.to(
      split.chars,
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.7,
        stagger: 0.028,
        ease: "khai.reveal",
      },
      eyebrowEl ? 0.1 : 0,
    );

    const afterTitle = 0.38;

    if (roleEl) {
      tl.to(roleEl, { opacity: 1, y: 0, duration: 0.5, ease: "khai.fade" }, afterTitle);
    }
    if (statementEl) {
      tl.to(statementEl, { opacity: 1, y: 0, duration: 0.5, ease: "khai.fade" }, afterTitle + 0.1);
    }
    if (chipsEl) {
      const chipEls = chipsEl.querySelectorAll(".hero-chip");
      gsap.set(chipEls, { opacity: 0, y: 10 });
      tl.to(
        chipEls,
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: "khai.fade" },
        afterTitle + 0.22,
      );
    }
  });
};

let stopWatch: (() => void) | null = null;

onMounted(() => {
  if (!preloaderVisible.value) {
    runHeroReveal();
  } else {
    const unwatch = watch(preloaderVisible, (visible) => {
      if (!visible) {
        runHeroReveal();
        unwatch();
      }
    });
    stopWatch = unwatch;
  }
});

onBeforeUnmount(() => {
  ctx?.revert();
  stopWatch?.();
});
</script>

<template>
  <div class="hero">
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
          <span class="hero-eyebrow">Finance Transformation, Controls &amp; Automation</span>
          <h1 class="hero-title">Khai Tran</h1>
          <p class="hero-role">Finance Supervisor — Value Protection, Claimback &amp; AR</p>
          <p class="hero-statement">
            I build structured finance systems that improve control, visibility, and scalability.
          </p>
          <div class="hero-chips">
            <span class="hero-chip">Former EY Senior</span>
            <span class="hero-chip">Regional Finance Operations</span>
            <span class="hero-chip hero-chip--tech">Python&thinsp;·&thinsp;Power BI&thinsp;·&thinsp;NetSuite</span>
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
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--color-cyan-500);
    font-weight: 700;
    opacity: 0;
  }

  &-title {
    font-weight: 900;
    letter-spacing: -0.01em;
    line-height: 0.95;
    font-size: var(--font-size-title-lg);
    perspective: 600px;

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
    color: var(--color-text-400);
    opacity: 0;

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
    color: var(--color-text-300);
    font-weight: 500;
    margin-top: 2px;
    opacity: 0;
    text-wrap: pretty;

    @include mixins.landscape {
      text-align: left;
    }
  }

  &-chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin-top: var(--space-xs);

    @include mixins.landscape {
      justify-content: flex-start;
    }
  }

  &-chip {
    font-size: 12px;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 100px;
    border: 1px solid rgba(0, 90, 160, 0.22);
    color: var(--color-dark-blue-500);
    background: rgba(255, 255, 255, 0.7);
    white-space: nowrap;
    letter-spacing: 0.01em;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(4px);

    &--tech {
      color: #6f3b00;
      border-color: rgba(200, 100, 0, 0.22);
      background: rgba(255, 246, 230, 0.8);
    }
  }
}
</style>
