<template>
    <div id="header">
        <img src="../assets/pokeball-icon.svg" alt="ícone de uma pokebola">
        <span> Pokédex </span>
        <div>
            <img src="../assets/search-icon.svg" alt="ícone de uma lupa">
        </div>
    </div>
</template>

<style scoped>

#header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 7rem;
    width: 100vw;

    background-color: var(--primary-color);

    font-family: var(--logo-font);
    font-size: 2.4rem;
    color: var(--white);
}

#header div {
    display: flex;
    align-items: center;
}

</style>