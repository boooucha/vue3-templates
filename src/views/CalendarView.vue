<template>
    <body>
        <div class="wrap">
            <h1>Weather forecast</h1>
            <p>Weather in your {{ town === "" ? "city" : townName }}</p>
            <input type="" v-model="town" placeholder="Your town">
            <button v-if="town !== ''" @click="getWeather()">Forecast</button>
            <button disabled v-else>Enter your city</button>
            <p v-if="error !== ''" class="error">{{ error }}</p>
            <div v-if="info != null">
                <p>{{ showTemp }}</p>
                <p>{{ showFeelsLike }}</p>
                <p>{{ showMinTemp }}</p>
                <p>{{ showMaxTemp }}</p>
            </div>
            
        </div>
    </body>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            town: "",
            error: "",
            info: null
        }
    },
    computed: {
        townName() {
            return "'" + this.town + "'"
        },
        showTemp() {
            return "Temperature: " + this.info.main.temp
        },
        showFeelsLike() {
            return "feels like: " + this.info.main.feels_like
        },
        showMinTemp() {
            return "Min Temperature: " + this.info.main.temp_min
        },
        showMaxTemp() {
            return "Max Temperature: " + this.info.main.temp_max
        }
    },
    methods: {
        getWeather() {
            if(this.town.trim().length < 2) {
                this.error = "The name of the town must be longer than 2 letters"
                return false
            }

            this.error = ""

            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.town}&units=metric&appid=bcd987cc02b9a7eb5948feb6ffb5478f`)

            .then(res => (this.info = res.data))
        }
    }
}
</script>

<style scoped lang="scss">
.error {
    color: #d03939;
}

body {
    width: 100%;
    min-height: 100vh;
    background: rgb(157, 156, 55);
    background: linear-gradient(90deg, rgba(157, 156, 55, 1) 57%, rgba(39, 120, 98, 1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.wrap {
    width: 900px;
    height: 500px;
    border-radius: 50px;
    background: #1f0f24;
    padding: 20px;

    & h1 {
        margin-top: 50px;
    }

    & p {
        margin-top: 10px;
    }

    & input {
        margin-top: 30px;
        background: transparent;
        border: 0;
        border-bottom: 2px solid #110813;
        color: #fcfcfc;
        font-size: 14px;
        padding: 5px 8px;
        outline: none;
    }

    & input:focus {
        border-bottom-color: #6e2d7d;
    }

    & button {
        margin-top: 30px;
        background: #d2af47;
        color: #fff;
        border-radius: 7px;
        border: 2px solid #b99935;
        padding: 7px 7px;
        margin-left: 15px;
        cursor: pointer;
        transition: transform 500ms ease;
    }

    & button:hover {
        transform: scale(1.1) translateY(-5px);
    }

    & button:disabled {
        background: #1f0f24;
        cursor: not-allowed;
    }
}
</style>