<script setup lang="ts">
import { ref } from "vue";

const license = ref(
  "Todo o conteúdo deste site está publicado sob a licença CC0 1.0 Universal"
);

const social = ref({
  label: "Redes Sociais",
  networks: [
    {
      href: "https://discord.gg/U5GwPfqhUP",
      image: "/discord.svg",
      description: "Discord",
      target: "_blank",
    },
  ],
});
</script>

<template>
  <!-- FIXME: Social não funciona? -->
  <br-footer :text="license" :social="social"></br-footer>
</template>
