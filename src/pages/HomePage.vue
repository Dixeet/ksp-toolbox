<template>
  <UContainer>
    <MarkdownApp>
      {{ content }}
    </MarkdownApp>
  </UContainer>
</template>

<script setup>
// import { MarkdownApp } from '@/components/MarkdownApp.jsx';
import { shallowRef } from 'vue';
const content = shallowRef(`
# Title

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor illo tempora totam
ullam. Excepturi, maiores voluptatum. A, aperiam commodi eaque explicabo inventore ipsa iure
iusto non quam recusandae suscipit unde?

- Item 1
- Item 2

## Title 2

$v = \\sqrt{GM\\cdot\\left( \\frac{2}{r} - \\frac{1}{a} \\right)}$
With : $v$ : velocity

> This is a quote
`);
</script>
