declare var global: any;
export interface MyGlobal {
}

export abstract class GlobalRef {
  abstract get nativeGlobal(): MyGlobal;
}

export class BrowserGlobalRef extends GlobalRef {
  get nativeGlobal(): MyGlobal { return window as MyGlobal; }
}
export class NodeGlobalRef extends GlobalRef {
  get nativeGlobal(): MyGlobal { return global as MyGlobal; }
}