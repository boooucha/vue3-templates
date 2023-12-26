<template>
   <section>
       <h1>CRYPTO</h1> 
       <input-component :changeAmount="changeAmount" :convert="convert" :favorite="favorite"/>
       <p v-if="error != ''">{{ error }}</p>
       <p class="result" v-if="result != 0">{{ result }} </p>
       <favorite-component :favs="favs" v-if="favs.length > 0" :getFromFavs="getFromFavs"/>
       <div class="selectors">
        <selector-component :setCrypto="setCryptoFirst" :cryptoNow="cryptoFirst"/>
       <selector-component :setCrypto="setCryptoSecond" :cryptoNow="cryptoSecond"/>
       </div>
   </section>
</template>

<script>
    import InputComponent from '../components/InputComponent.vue'
    import SelectorComponent from '../components/SelectorComponent.vue'
    import FavoriteComponent from '../components/FavoriteComponent.vue'
    import CryptoConvert from 'crypto-convert';

    const convert = new CryptoConvert();

    export default {
        components: { InputComponent, SelectorComponent, FavoriteComponent },
        data() {
            return {
                amount: 0,
                cryptoFirst: '',
                cryptoSecond: '',
                error: '',
                result: 0,
                favs: []
            }            
        },
        methods: {
            favorite() {
                this.favs.push({
                    from: this.cryptoFirst,
                    to: this.cryptoSecond
                });
            },
            getFromFavs(index) {
                this.cryptoFirst = this.favs[index].from
                this.cryptoSecond = this.favs[index].to
            },
            changeAmount(val) {
                this.amount = val
            },
            setCryptoFirst(val) {
                this.cryptoFirst = val
            },
            setCryptoSecond(val) {
                this.cryptoSecond = val
            },
            async convert() {
                if(this.amount <= 0) {
                    this.error = 'Please enter a number that more than a zero';
                    return;
                } else if(this.cryptoFirst === '' || this.cryptoSecond === '') {
                    this.error = 'Please choose the currency';
                    return;
                } else if(this.cryptoFirst === this.cryptoSecond) {
                    this.error = 'Please choose the other currency';
                    return;
                }

                this.error = '';

                await convert.ready();

                if(this.cryptoFirst === 'BTC' && this.cryptoSecond === 'ETH')
                    this.result = convert.BTC.ETH(this.amount);
                else if (this.cryptoFirst === 'BTC' && this.cryptoSecond === 'USDT')
                    this.result = convert.BTC.USDT(this.amount);
                else if (this.cryptoFirst === 'ETH' && this.cryptoSecond === 'BTC')
                    this.result = convert.ETH.BTC(this.amount);
                else if (this.cryptoFirst === 'ETH' && this.cryptoSecond === 'USDT')
                    this.result = convert.ETH.USDT(this.amount);
                else if (this.cryptoFirst === 'USDT' && this.cryptoSecond === 'BTC')
                    this.result = convert.USDT.BTC(this.amount);
                else if (this.cryptoFirst === 'USDT' && this.cryptoSecond === 'ETH')
                    this.result = convert.USDT.ETH(this.amount);

                console.log(this.result)

            }
        }
    }
</script>

<style scoped lang="scss">
    section {
        width: 100%;
        height: 100vh;
        background: rgb(157,156,55);
        background: linear-gradient(90deg, rgba(157,156,55,1) 0%, rgba(86,22,108,1) 0%);
        min-height: 100vh;
        font-family: 'Montserrat', sans-serif;

        & h1 {
            color: #000;
            font-family: 'Nabla', cursive;
            padding-top: 100px;
            font-size: 10em;
        }

        & .selectors {
            padding-top: 30px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 700px;
            margin: 0 auto;
        }
        .result {
            font-family: 'Nabla', cursive;
            font-size: 2em;
            color: #fff;
        }
        
    }

   
</style>