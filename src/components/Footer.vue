<template>
  <br-footer ref="footer" ></br-footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import discordSvg from "../assets/discord.svg";

const footer = ref(null);
const license ="Todo o conteúdo deste site está publicado sob a licença CC0 1.0 Universal";
const social = ref({
  label: "Redes Sociais",
  networks: [
    {
      href: "https://discord.gg/U5GwPfqhUP",
      image: discordSvg,
      description: "Discord",
      target: "_blank",
    },
  ],
});

onMounted(() => {
  const footerInstance = footer?.value?._instance;
  const props = footerInstance.props;
  props.text = license;
  props.social = social.value;
});

</script>
