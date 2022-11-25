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
    icon: "bell",
    name: "Nível 1",
  },
  {
    id: 2,
    icon: "cubes",
    name: "Nível 1",
    list: [
      {
        icon: "address-book",
        name: "Nível 2",
        list: [
          {
            icon: "tree",
            name: "Nível 3",
            list: [
              {
                icon: "tree",
                name: "Nível 4",
                url: "javascript:void(0)",
              },
              {
                icon: "tree",
                name: "Nível 4",
              },
            ],
          },
          {
            icon: "tree",
            name: "Nível 3",
            url: "javascript:void(0)",
          },
        ],
      },
      {
        icon: "heart",
        name: "Nível 2",
        url: "javascript:void(0)",
      },
    ],
  },
  {
    id: 3,
    icon: "file-archive",
    name: "Nível 1",
  },
]);

onMounted(() => {

  menu.value.id = id;
  menu.value.isPush = true;
  menu.value.list = menuItems.value;
  menu.value.dataBreakpoints = "col-sm-4 col-lg-2";
});

</script>
