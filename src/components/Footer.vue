<template>
  <br-footer ref="footer" ></br-footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import discordSvg from "../assets/discord.svg";

interface Social {
  label: string;
  network: [{
    href: string;
    image: string;
    description: string;
    target: string;
  }];
}

const footer = ref(null);
let license: string;
let social: Social;

license = "Todo o conteúdo deste site está publicado sob a licença CC0 1.0 Universal";
console.log(license);
social = {
  label: "Redes sociais",
  network: [
    {
      href: "https://discord.gg/4YQZ8Y",
      image: discordSvg,
      description: "Discord",
      target: "_blank",
    },
  ],
};
console.log(social);

onMounted(() => {
  console.log(footer);
  const footerInstance = footer?.value?._instance;
  const props = footerInstance.props;
  props.text = license;
  props.social = social;
});

</script>
