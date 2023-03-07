<template>
    <button
    :disabled="isDisabled">
    <!-- Se for previous for passado como prop
    Renderiza essa arrow em svg -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="direction === 'previous'">
        <path d="M5 11.8814L9.21875 17.2594M20 11.8814H5H20ZM5 11.8814L9.21875 7L5 11.8814Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <!-- Se for next renderiza esta -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="direction === 'next'">
        <path d="M20 11.8814L15.7812 17.2594M5 11.8814H20H5ZM20 11.8814L15.7812 7L20 11.8814Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </button>
</template>

<script>

export default {
    props: [
        'direction',
        'isDisabled'
    ]
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