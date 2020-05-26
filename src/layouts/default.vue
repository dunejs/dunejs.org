<template lang="pug">
  v-app
    v-app-bar(app color="primary" dark)
    v-content
        v-container(class="fill-height" fluid)
            slot
    v-footer(color="primary" app)
</template>

<script>
export default {
  name: "default",
};
</script>
