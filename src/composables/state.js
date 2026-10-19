import { createGlobalState } from '@vueuse/core';
import { useBodiesStorage } from '@/features/bodies/composables/useBodiesStorage.js'
import { useAppStore } from '@/composables/useAppStore.js'

function clearLocalStorage() {
  localStorage.clear();
}
function resetAllStores(stores) {
  stores.forEach(store => store.reset());
}

export const useGlobalState = createGlobalState(() => {
  const appStore = useAppStore();
  const bodies = useBodiesStorage();

  function resetAll() {
    resetAllStores([appStore, bodies]);
  }
  return { appStore, bodies, clearLocalStorage, resetAll };
});
