import { isFeatureEnabled } from "../utils/features";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { mouse } from "../three/objects/room/mouse";

// Register premium plugins once at app init
gsap.registerPlugin(CustomEase, SplitText);

// Shared signature eases available across the app
CustomEase.create("khai.reveal", "0.16, 1, 0.3, 1");
CustomEase.create("khai.fade", "0.4, 0, 0.2, 1");
CustomEase.create("khai.exit", "0.4, 0, 1, 1");

const play = () => {
  if (!isFeatureEnabled("introWave")) return;

  const tl = gsap.timeline();
  tl.set(mouse.enabled, { value: true }, 0.3);
};

export const intro = { play };
