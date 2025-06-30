// types/three-examples.d.ts
declare module 'three/examples/jsm/loaders/FBXLoader' {
  import { Loader, Group, LoadingManager } from 'three';

  export class FBXLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (object: Group) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent | ErrorEventInit | unknown) => void
    ): void;
    parse(data: ArrayBuffer | string, path: string): Group;
  }
}
