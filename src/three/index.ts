import { camera } from "./core/camera";
import { renderer } from "./core/renderer";
import { objects } from "./objects/index";
import { raycast } from "./utils/raycast";
import { threeSizes } from "./utils/sizes";

const init = (canvas: HTMLCanvasElement) => {
  threeSizes.init(canvas);
  threeSizes.resize();
  renderer.init(canvas);
  camera.init();
  objects.init();
  raycast.init();
};

const destroy = () => {
  raycast.destroy();
  objects.destroy();
  camera.destroy();
  renderer.destroy();
  threeSizes.destroy();
};

export const three = { init, destroy };
