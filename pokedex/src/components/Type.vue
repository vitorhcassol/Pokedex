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
    display: flex;
    align-items: center;

    max-width: 80%;

    border-radius: 2rem;
    padding: 0.1rem;

    background-color: var(--black);
    color: var(--white);

    text-align: center;
    font-size: 1rem;
}

@media only screen and (min-width: 900px) {
    .tag {
        font-size: 1.5rem;
    }
}

</style>