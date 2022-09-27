<script setup lang="ts">
import { ref } from "vue";

const title = ref("Web Components GOVBR-DS -  Quickstart Vue");
const subtitle = ref("Baseado na v1.3.0 do @govbr-ds/webcomponents");

const image = ref({
  src: "assets/govbr-logo.png",
  alt: "logo",
});

const links = ref([
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
]);
</script>

<template>
  <br-header
    :image="image.src"
    :alt="image.alt"
    :title="title"
    :subtitle="subtitle"
    has-menu
  >
    <template v-slot:headerMenu>
      <br-button
        role="option"
        circle
        density="small"
        aria-label="Menu"
        icon="bars"
        data-toggle="menu"
        data-target="#main-navigation"
      ></br-button>
    </template>
    <template v-slot:headerAction>
      <br-header-action
        title-links="Acesso Rápido"
        :listLinks="links"
      ></br-header-action>
    </template>
  </br-header>
</template>
