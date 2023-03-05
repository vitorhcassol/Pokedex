<template>
    <div :class="this.class">
        {{ type }}
    </div>
</template>

<script>

export default {
    props: [
        'type',
        'class'
    ],
}
</script>

<style scoped>

.tagHome {
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


.tagDetail {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20vw;
    height: 2.5rem;

    max-width: 17rem;

    border-radius: 2rem;
    padding: 0.1rem;

    background-color: var(--black);
    color: var(--white);

    font-size: 1.6rem;
}


@media only screen and (min-width: 900px) {
    .tagHome {
        font-size: 1.5rem;
    }
}

</style>