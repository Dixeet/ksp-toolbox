<template>
  <UTable
    sticky
    v-model:sorting="sorting"
    :data="filteredData"
    :columns="columns"
    :column-pinning="{ left: ['name'] }"
    class="flex-1 max-h-[calc(100dvh-150px)]"
    :ui="{
      thead: 'bg-accented backdrop-blur-none',
      // tr: 'bg-default',
      th: 'bg-accented',
      td: 'bg-default py-3',
    }"
  />
</template>

<script setup>
import { computed, h, shallowRef } from 'vue';
import UButton from '@nuxt/ui/components/Button.vue';
import UPopover from '@nuxt/ui/components/Popover.vue';
import CopyButton from '@/components/CopyButton.vue';
import MarkdownApp from '@/components/MarkdownApp.jsx';
import { bodyKeys } from '@/features/bodies/composables/useBodiesStorage.js';
import { autoFormat } from '@/utils/Formatter.js';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  filter: {
    type: Array,
    default: () => [],
  },
});

const sorting = shallowRef([]);

const filteredData = computed(() => {
  if (!props.filter || props.filter.length === 0) {
    return props.data;
  }

  return props.data.filter((body) => props.filter.includes(body.pack));
});

const columns = Object.keys(bodyKeys).map((key) => ({
  accessorKey: key,
  enableSorting: true,
  header: ({ column }) => {
    const isSorted = column.getIsSorted();
    const def = bodyKeys[key];

    const sortBtn = h(UButton, {
      color: 'neutral',
      variant: 'ghost',
      class: 'cursor-pointer -ml-2',
      icon: isSorted
        ? isSorted === 'asc'
          ? 'i-tabler-arrow-up'
          : 'i-tabler-arrow-down'
        : 'i-tabler-arrows-sort',
      onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
    });

    const infoPopover = def.description
      ? h(
          UPopover,
          {},
          {
            default: () =>
              h(UButton, {
                icon: 'i-tabler-info-small',
                color: 'info',
                variant: 'link',
                class: 'cursor-pointer p-0.5 text-muted hover:text-info rounded-full',
                onClick: (e) => e.stopPropagation(),
              }),
            content: () =>
              h(
                'div',
                {
                  class: 'p-3 max-w-xs text-sm',
                  onClick: (e) => e.stopPropagation(),
                },
                h(MarkdownApp, { value: def.description }),
              ),
          },
        )
      : null;

    return h('div', { class: 'flex items-center w-full min-w-max justify-start' }, [
      sortBtn,
      h('div', { class: 'relative' }, [
        def.label,
        infoPopover ? h('div', { class: 'absolute -top-2 -right-5' }, infoPopover) : null,
      ]),
    ]);
  },
  cell: ({ row }) => {
    const rawValue = row.getValue(key);
    if (typeof rawValue === 'number' && !Number.isNaN(rawValue)) {
      const formatted = bodyKeys[key].formatter
        ? bodyKeys[key].formatter(rawValue)
        : autoFormat(rawValue, bodyKeys[key].unit, { withSpace: true });

      return h('div', { class: 'flex items-center gap-1.5 w-full' }, [
        h('span', { class: 'truncate' }, formatted),
        h(CopyButton, { value: rawValue }),
      ]);
    }
    return rawValue;
  },
}));
</script>
