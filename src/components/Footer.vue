<template>
    <div id="footer">
        <NavButton
        @click="$emit('backward')"
        direction="previous"
        :is-disabled="previousPageURL === null ? true : false"
        />

        <NavButton
        @click="$emit('forward')"
        direction="next"
        :is-disabled="nextPageURL === null ? true : false"
        />
    </div>
</template>

<script>

import NavButton from './NavButton.vue';

export default {
    props: [
        'previousPageURL',
        'nextPageURL'
    ],

    components: {
        NavButton
    }
}

</script>

<style scoped>

#footer {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 4rem;

    height: 7rem;
    width: 100vw;

    background-color: var(--primary-color);
}

</style>