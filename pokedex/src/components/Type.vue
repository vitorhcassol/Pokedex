<template>
    <div class="tag">
        {{ type }}
    </div>
</template>

<script>

export default {
    props: ['type'],
}
</script>

<style scoped>

.tag {
    max-width: 80%;

    border-radius: 2rem;
    padding: 0.1rem;

    background-color: var(--black);
    color: var(--white);

    text-align: center;
    font-size: 1rem;
}

</style>