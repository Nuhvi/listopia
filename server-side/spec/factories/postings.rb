# frozen_string_literal: true

FactoryBot.define do
  factory :posting do
    title { Faker::Lorem.sentence }
    price { Faker::Commerce.price(range: 0..1_000_000.0) }
    desc { Faker::Lorem.paragraph }
    category { %w[Apartment House Room Land Other].sample }
  end
end
