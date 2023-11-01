import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    RaButton: typeof components.Button;
  }
}
export {};
