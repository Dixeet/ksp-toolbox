import { useStorage } from '@vueuse/core';

const DEFAULT_VALUES = {
  bodiesPagePack: [],
}

export const useAppStore = () => {
  const appStore = useStorage('appStore', {
    ...DEFAULT_VALUES,
  });
  appStore.reset = function(key) {
    if (key) {
      appStore.value[key] = DEFAULT_VALUES[key];
    } else {
      appStore.value = DEFAULT_VALUES;
    }
  }
  appStore.set = function(key, value) {
    appStore.value[key] = value;
  }

  return appStore;
};
