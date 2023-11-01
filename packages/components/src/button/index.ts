import _Button from "./button.vue";
import type { App, Plugin } from "vue";
type SFCwithInstall<T> = T & Plugin;
const withInstall = <T>(comp: T) => {
  (comp as SFCwithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    app.component(name, comp as SFCwithInstall<T>);
  };
  return comp as SFCwithInstall<T>;
};

export const Button = withInstall(_Button);
export default Button;
