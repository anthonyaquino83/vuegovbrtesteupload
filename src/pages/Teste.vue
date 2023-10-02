<script setup></script>
<template>
  <div>
    <div class="br-upload">
      <label class="upload-label" for="single-file"><span>Envio de arquivo</span></label>
      <input class="upload-input" id="single-file" type="file" />
      <div class="upload-list"></div>
    </div>
  </div>
</template>
<style lang="scss">
@import '@govbr-ds/core/src/partial/scss/_base';
@import '@govbr-ds/core/src/partial/scss/_utilities';
@import '@govbr-ds/core/src/components/upload/_upload';
@import '@govbr-ds/core/src/components/button/_button';
@import '@govbr-ds/core/src/components/item/_item';
@import '@govbr-ds/core/src/components/message/_message';
@import '@govbr-ds/core/src/components/tooltip/_tooltip';
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css');
</style>
