# frozen_string_literal: true

FactoryBot.define do
  factory :posting, aliases: %i[favoriteposting] do
    title { Faker::Lorem.sentence(word_count: 3, supplemental: true) }
    price { Faker::Commerce.price(range: 0..1_000_000.0) }
    desc { Faker::Lorem.paragraph }
    category { %w[Apartment House Room Land Other].sample }

    association :user
  end
end
