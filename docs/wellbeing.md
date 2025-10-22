---
title: 幸福小测验
editLink: false
sidebar: false
---

<script setup>
import WellbeingQuiz from './.vitepress/components/WellbeingQuiz.vue'
</script>

<style>
.vp-doc {
  max-width: 100% !important;
  padding: 0 !important;
}

.vp-doc .container,
.vp-doc .content-container {
  max-width: 100% !important;
}
</style>

<ClientOnly>
  <WellbeingQuiz />
</ClientOnly>
