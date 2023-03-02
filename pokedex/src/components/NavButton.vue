<template>
    <button
    :disabled="isDisabled"
    >
        <img :src="setImgDirection" :alt="direction">
    </button>
</template>

<script>

export default {
    props: [
        'direction',
        'isDisabled'
    ],

    computed: {
        setImgDirection() {
            if(this.direction === 'previous') {
                return './src/assets/left-arrow-icon.svg'
            } else {
                return './src/assets/right-arrow-icon.svg'
            }
        }
    }
}

</script>

<style scoped>

button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 4rem;
    min-width: 12rem;

    border: none;
    border-radius: 0.5rem;

    background-color: var(--terciary-color);
    color: var(--white);

    box-shadow: 0.3rem 0.3rem var(--box-shadow-color);

    transition: background-color 0.10s;
}

button:disabled,
button:disabled:hover,
button:disabled:active {
    background-color: var(--light-terciary);

    cursor: not-allowed;
    box-shadow: 0.3rem 0.3rem var(--box-shadow-color);
}

button:hover {
    cursor: pointer;
}

button:active {
    background-color: #000000;

    box-shadow: none;
}


</style>