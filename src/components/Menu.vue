<template>
  <br-menu ref="menu" show-menu></br-menu>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";

const menu: Ref<any> = ref(null);
const id = "main-navigation";

const menuItems = ref([
  {
    id: 1,
    icon: "home",
    name: "Página Inicial",
    url: "/",
  },
  {
    id: 2,
    icon: "user-cog",
    name: "Usuário",
    url: "/usuario",
  },
]);

onMounted(() => {
  menu.value.id = id;
  menu.value.isPush = true;
  menu.value.list = menuItems.value;
  menu.value.dataBreakpoints = "col-sm-4 col-lg-3";
});
</script>
