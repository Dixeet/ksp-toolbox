<template>
  <UContainer>
    <MarkdownApp>
      {{ content }}
    </MarkdownApp>
    <div class="mt-4">
      <Table>
        <Thead>
          <Tr>
            <Th scope="col">Person</Th>
            <Th scope="col">Interest</Th>
            <Th scope="col">Age</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td scope="row">Chris</Td>
            <Td scope="row">Html</Td>
            <Td scope="row">22</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  </UContainer>
</template>

<script setup>
// py-3 px-4 font-semibold text-sm border-e border-b first:border-s border-t border-muted text-start
// py-3 px-4 font-semibold text-sm border-e border-b first:border-s border-t border-muted

import { shallowRef } from 'vue';
const content = shallowRef(`
# Title

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor illo tempora totam
ullam. Excepturi, maiores voluptatum. A, aperiam commodi eaque explicabo inventore ipsa iure
iusto non quam recusandae suscipit unde?

- Item 1
- Item 2

1. It 1
2. It 2

## Title 2

$v = \\sqrt{GM\\cdot\\left( \\frac{2}{r} - \\frac{1}{a} \\right)}$
With : $v$ : velocity

> This is a quote

| Prop    | Default   | Type                     |
|---------|-----------|--------------------------|
| \`name\`  |           | \`string\`{lang="ts-type"} |
| \`size\`  | \`md\`      | \`string\`{lang="ts-type"} |
| \`color\` | \`neutral\` | \`string\`{lang="ts-type"} |
`);
</script>
