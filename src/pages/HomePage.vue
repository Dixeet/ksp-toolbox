<template>
  <div class="@container mx-auto">
    <div class="p-4 px-4 @sm:px-6 @lg:px-8">
      <MarkdownApp math>
        <pre>
          # Title
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor illo tempora totam
          ullam. Excepturi, maiores voluptatum. A, aperiam commodi eaque explicabo inventore ipsa iure
          iusto non quam recusandae suscipit unde?

          - Item 1
          - Item 2
          ## Title 2

          $v = \sqrt{GM\cdot\left( \frac{2}{r} - \frac{1}{a} \right)}$

          With :
          $v$ : velocity

          ```javascript
          const test = 0
          ```
          `foo = bar`
        </pre>
      </MarkdownApp>
    </div>
  </div>
</template>

<script setup></script>
