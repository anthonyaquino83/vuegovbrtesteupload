<script setup lang="ts">
import { ref } from "vue";
import govLogo from "../assets/govbr-logo.png";

const title = ref("Web Components GOVBR-DS -  Quickstart Vue");
const subtitle = ref("Baseado na v1.4.1 do @govbr-ds/webcomponents");

const image = ref({
  src: govLogo,
  alt: "logo",
});

const links = ref(
  JSON.stringify([
    {
      name: "GOVBR-DS",
      href: "https://gov.br/ds",
      title: "Padrão Digital de Governo",
      target: "_blank",
    },
    {
      name: "Serpro",
      href: "https://www.serpro.gov.br/",
      title: "SERPRO",
      target: "_blank",
    },
    {
      name: "Dataprev",
      href: "https://portal.dataprev.gov.br/",
      title: "Dataprev",
      target: "_blank",
    },
  ])
);
</script>

<template>
  <br-header
    :image="image.src"
    :alt="image.alt"
    :title="title"
    :subtitle="subtitle"
    has-menu
    image-size="medium"
    data-toggle="menu"
    data-target="#main-navigation"
  >
    <br-header-action
      slot="headerAction"
      :list-links="links"
    ></br-header-action>
  </br-header>
</template>
