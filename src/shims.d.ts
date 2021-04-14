declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "await-promises" {
  export default class AwaitPromises {
    collect(): undefined;
    stop(): undefined;
    wait(): Promise<undefined>;
  }
}
