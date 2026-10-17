import { createGlobalState } from '@vueuse/core';

function clearLocalStorage() {
  localStorage.clear();
}
function resetAllStores(stores) {
  stores.forEach(store => store.reset());
}

export const useGlobalState = createGlobalState(() => {

  function resetAll() {
    resetAllStores([]);
  }
  return { clearLocalStorage, resetAll };
});
