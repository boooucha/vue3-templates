<template>
    <input min="0" type="number" @input="changeAmount($event.target.value)" placeholder="Enter the number"><br>
    <button @click="convert">Convert</button>
    <button class="fav-button" @click="favorite">Favorites</button>
</template>
 
<script>
export default {
    props: {
        changeAmount: {
            type: Function,
            required: true,
        },
        convert: {
            type: Function,
            required: true,
        },
        favorite: {
            type: Function,
            required: true,
        }
    }
}
</script>
 
<style scoped lang="scss">
input {
    border: 0;
    border-radius: 3px;
    outline: none;
    width: 500px;
    padding: 10px 15px;
    color: #333;
    font-size: 20px;
}
button {
    margin-top: 15px;
    width: 100px;
    cursor: pointer;
    background-color: #fff;
    color: #9317ab;
    transition: transform 500ms ease;
    border-radius: 7px;
    padding: 7px 7px;
    font-size: 15px;
    border: 2px solid #b40ad5;

}

button:hover {
        transform: scale(1.1) translateY(-5px);
    }

.fav-button {
    margin-left: 20px;
}    

</style>