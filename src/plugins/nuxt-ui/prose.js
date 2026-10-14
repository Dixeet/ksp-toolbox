export default {
  h1: {
    slots: {
      base: 'text-4xl text-highlighted font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)',
      link: 'inline-flex items-center gap-2',
    },
  },
  h2: {
    slots: {
      base: [
        'relative text-2xl text-highlighted font-bold mt-12 mb-6 scroll-mt-[calc(48px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(48px+var(--ui-header-height))] [&>a]:rounded-sm [&>a]:outline-primary/25 [&>a]:focus-visible:outline-3 [&>a>code]:border-dashed hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary [&>a>code]:text-xl/7 [&>a>code]:font-bold',
        '[&>a>code]:transition-colors',
      ],
      leading: [
        'absolute -ms-8 top-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated group-hover:text-primary group-focus:text-primary rounded-md hidden lg:flex text-muted',
        'transition',
      ],
      leadingIcon: 'size-4 shrink-0',
      link: 'group lg:after:absolute lg:after:inset-y-0 lg:after:-inset-s-2 lg:after:w-2',
    },
  },
  h3: {
    slots: {
      base: [
        'relative text-xl text-highlighted font-bold mt-8 mb-3 scroll-mt-[calc(32px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(32px+var(--ui-header-height))] [&>a]:rounded-sm [&>a]:outline-primary/25 [&>a]:focus-visible:outline-3 [&>a>code]:border-dashed hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary [&>a>code]:text-lg/6 [&>a>code]:font-bold',
        '[&>a>code]:transition-colors',
      ],
      leading: [
        'absolute -ms-8 top-0.5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated group-hover:text-primary group-focus:text-primary rounded-md hidden lg:flex text-muted',
        'transition',
      ],
      leadingIcon: 'size-4 shrink-0',
      link: 'group lg:after:absolute lg:after:inset-y-0 lg:after:-inset-s-2 lg:after:w-2',
    },
  },
  h4: {
    slots: {
      base: 'text-lg text-highlighted font-bold mt-6 mb-2 scroll-mt-[calc(24px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(24px+var(--ui-header-height))] [&>a]:rounded-sm [&>a]:outline-primary/25 [&>a]:focus-visible:outline-3',
      link: '',
    },
  },
  p: {
    base: 'my-5 leading-7 text-pretty',
  },
  strong: {
    base: '',
  },
  em: {
    base: '',
  },
  a: {
    base: [
      'text-primary border-b border-transparent hover:border-primary focus-visible:border-transparent font-medium focus-visible:rounded-xs outline-primary/25 focus-visible:outline-3 focus-visible:has-[>code]:outline-0 has-[>code]:border-b-0 [&>code]:border-dashed [&>code]:outline-primary/25 focus-visible:[&>code]:outline-3 hover:[&>code]:border-primary hover:[&>code]:text-primary focus-visible:[&>code]:border-primary focus-visible:[&>code]:text-primary',
      'transition-colors [&>code]:transition-colors',
    ],
  },
  blockquote: {
    base: 'border-s-4 border-accented ps-4 italic',
  },
  hr: {
    base: 'border-t border-default my-12',
  },
  ul: {
    base: 'list-disc ps-6 my-5 marker:text-(--ui-border-accented)',
  },
  ol: {
    base: 'list-decimal ps-6 my-5 marker:text-muted',
  },
  li: {
    base: 'my-1.5 ps-1.5 leading-7 [&>ul]:my-0',
  },
  table: {
    slots: {
      root: 'relative my-5 overflow-x-auto rounded-md outline-primary/25 focus-visible:outline-3',
      base: 'w-full border-separate border-spacing-0 rounded-md'
    }
  },
  thead: {
    base: 'bg-muted'
  },
  tbody: {
    base: ''
  },
  tr: {
    base: '[&:first-child>th:first-child]:rounded-ss-md [&:first-child>th:last-child]:rounded-se-md [&:last-child>td:first-child]:rounded-es-md [&:last-child>td:last-child]:rounded-ee-md'
  },
  th: {
    base: 'py-3 px-4 font-semibold text-sm border-e border-b first:border-s border-t border-muted',
    variants: {
      align: {
        left: 'text-start',
        center: 'text-center',
        right: 'text-end'
      }
    },
    defaultVariants: {
      align: 'left'
    }
  },
  td: {
    base: 'py-3 px-4 text-sm align-top border-e border-b first:border-s border-muted [&_code]:text-xs/5 [&_p]:my-0 [&_p]:leading-6 [&_ul]:my-0 [&_ol]:my-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:leading-6 [&_li]:my-0.5',
    variants: {
      align: {
        left: 'text-start',
        center: 'text-center',
        right: 'text-end'
      }
    },
    defaultVariants: {
      align: 'left'
    }
  },
};