<template>
    <div>
        <h1>Bar</h1>
        <h2>couont {{ this.$store.state.count }}</h2>
    </div>
</template>


<script>
    export default {
        fetch(store) {
            return store.dispatch('increment');
        }
    }
</script>