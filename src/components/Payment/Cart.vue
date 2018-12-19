<template>
    <main class="page payment-page">
        <section class="payment-form dark">
        <div class="container">
            <div class="block-heading">
            	<h2>My Cart({{ $store.getters.ItemCount }})</h2>
            </div>
            <form>
				<div class="products">
					<h3 class="title">Details</h3>					
					<div class="item" v-show="cartDetails.length <= 0">
						<span>Your cart is empty. Please add some item(s) to proceed further.</span>
					</div>
					<div class="item" v-for="item in cartDetails">						
						<span class="price">{{ item.Currency }}{{ item.Price * item.Qty }}</span>
						<p class="item-name">{{ item.Name }}</p>
							<span class="units">Qty: {{ item.Qty }}</span> &nbsp;&nbsp;
							<span class="units">| Unit price: {{ item.Currency }}{{ item.Price }}</span>
							<v-icon color="red" v-on:click="removeFromCart($store, item)" small>delete</v-icon>
						<p class="item-description">{{ item.Details }}</p>
					</div>
					<div class="total">Total:<span class="price">{{ cartTotal }}</span></div>
					<br />
					<div class="order-buttons" v-show="cartDetails.length > 0">
						<v-btn slot="activator" color="primary" to="/" dark small> &nbsp;&nbsp;<  Continue Shopping</v-btn>
						<v-btn slot="activator" color="primary" to="/payment" dark small> <v-icon small> check_circle </v-icon>&nbsp;&nbsp;Place Order</v-btn>
					</div>
				</div>
            </form>
        </div>
        </section>
    </main>
</template>
<script lang="ts">
    const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
	export default {
		name: 'Cart',
		computed: {
			cartDetails(){
				return this.$store.getters.MyCartDetails
			},
			cartTotal(){
				return this.$store.getters.MyCartCurrency + this.$store.getters.MyCartTotal
			}
		},
		methods:{
            removeFromCart:(store, item) => {
				console.log(item)
                item.IsRemove = false
                store.commit(REMOVE_PRODUCT, item);
            }
		}
	}
</script>
<style>
	.order-buttons{
		text-align: Right;
	}
    .payment-form{
        padding-bottom: 50px;
        font-family: 'Montserrat', sans-serif;
    }

    .payment-form.dark{
        background-color: #f6f6f6;
    }

    .payment-form .content{
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
        background-color: white;
    }

    .payment-form .block-heading{
        padding-top: 50px;
        margin-bottom: 40px;
        text-align: center;
    }

    .payment-form .block-heading p{
        text-align: Right;
        max-width: 420px;
        margin: auto;
        opacity:0.7;
    }

    .payment-form.dark .block-heading p{
        opacity:0.8;
    }

    .payment-form .block-heading h1,
    .payment-form .block-heading h2,
    .payment-form .block-heading h3 {
        margin-bottom:1.2rem;
        color: #3b99e0;
    }

    .payment-form form{
        border-top: 2px solid #5ea4f3;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
        background-color: #ffffff;
        padding: 0;
        max-width: 600px;
        margin: auto;
    }

    .payment-form .title{
        font-size: 1em;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        margin-bottom: 0.8em;
        font-weight: 600;
        padding-bottom: 8px;
    }

    .payment-form .products{
        background-color: #f7fbff;
        padding: 25px;
    }

    .payment-form .products .item{
        margin-bottom:1em;
    }

    .payment-form .products .item-name{
        font-weight:600;
        font-size: 0.9em;
    }

    .payment-form .products .item-description{
        font-size:0.8em;
        opacity:0.6;
    }

    .payment-form .products .item p{
        margin-bottom:0.2em;
    }

    .payment-form .products .price{
        float: right;
        font-weight: 600;
        font-size: 0.9em;
    }

	.units{
        float: left;
        font-weight: 600;
        font-size: 0.8em;
		padding-right: 5px;
		color: grey
    }

    .payment-form .products .total{
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        margin-top: 10px;
        padding-top: 19px;
        font-weight: 600;
        line-height: 1;
    }

    .payment-form .card-details{
        padding: 25px 25px 15px;
    }

    .payment-form .card-details label{
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 15px;
        color: #79818a;
        text-transform: uppercase;
    }

    .payment-form .card-details button{
        margin-top: 0.6em;
        padding:12px 0;
        font-weight: 600;
    }

    .payment-form .date-separator{
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 5px;
    }

    @media (min-width: 576px) {
        .payment-form .title {
            font-size: 1.2em; 
        }

        .payment-form .products {
            padding: 40px; 
        }

        .payment-form .products .item-name {
            font-size: 1em; 
        }

        .payment-form .products .price {
            font-size: 1em; 
        }

        .payment-form .card-details {
            padding: 40px 40px 30px; 
        }

        .payment-form .card-details button {
            margin-top: 2em; 
        } 
    }
</style>  