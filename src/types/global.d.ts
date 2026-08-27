// Global type definitions for Ezoic

declare global {
  interface Window {
    ezstandalone?: {
      cmd: (() => void)[];
      showAds: (...placementIds: (number | string)[]) => void;
    };
  }
}

export {};
