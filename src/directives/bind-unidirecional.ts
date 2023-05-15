export default {
  // Define um binding bidirecional entre o valor do campo de formulário e a propriedade correspondente do objeto `form`
  // Sem a necessidade de criar propriedades computadas ou métodos.
  beforeMount(el, binding, vnode) {
    el.value = binding.value;
    el.addEventListener("input", (event) => {
      const objForm = vnode.ctx.data ? vnode.ctx.data : vnode.ctx.data["form"];
      if (objForm) {
        el.value = event.detail[0] ? event.detail[0] : event.target.value;
        objForm[el.id] = event.detail[0] ? event.detail[0] : event.target.value;
      }
    });
  },
  updated(el, binding) {
    el.value = binding.value;
  },
};
