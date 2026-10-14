<template>
  <UContainer>
    <MarkdownApp>
      {{ content }}
    </MarkdownApp>
    <ProseTag class="w-sm" tag="hr"></ProseTag>
    <ProseTag tag="h1">H1</ProseTag>
    <ProseTag tag="blockquote">Quote</ProseTag>
    <ProseTag tag="p"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis consectetur
      consequatur corporis delectus dicta eaque eveniet id illum iure laborum laudantium molestias
      mollitia odit optio pariatur sapiente, similique voluptas?</ProseTag
    >
    <ProseTag tag="ul">
      <ProseTag tag="li">Item 1</ProseTag>
      <ProseTag tag="li">Item 2</ProseTag>
    </ProseTag>
    <ProseTag tag="ol">
      <ProseTag tag="li">Item 1</ProseTag>
      <ProseTag tag="li">Item 2</ProseTag>
    </ProseTag>
    <ProseTag tag="table">
      <ProseTag tag="thead">
        <ProseTag tag="tr">
          <ProseTag tag="th" scope="col">Person</ProseTag>
          <ProseTag tag="th" scope="col">Most interest in</ProseTag>
          <ProseTag tag="th" scope="col">Age</ProseTag>
        </ProseTag>
      </ProseTag>
      <ProseTag tag="tbody">
        <ProseTag tag="tr">
          <ProseTag tag="th" scope="row">Chris</ProseTag>
          <ProseTag tag="td">HTML tables</ProseTag>
          <ProseTag tag="td">22</ProseTag>
        </ProseTag>
      </ProseTag>
      <ProseTag tag="tfoot">
        <ProseTag tag="tr">
          <ProseTag tag="th" scope="row" colspan="2">Average age</ProseTag>
          <ProseTag tag="td">33</ProseTag>
        </ProseTag>
      </ProseTag>
    </ProseTag>
  </UContainer>
</template>

<script setup>
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
`);
</script>
