require 'stripe'
require 'dotenv/load'

Stripe.api_key = ENV['STRIPE_TEST_KEY']
p Stripe::Customer.list
