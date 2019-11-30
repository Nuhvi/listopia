# frozen_string_literal: true

FactoryBot.define do
  factory :user, aliases: %i[favoriters] do
    email { Faker::Internet.email }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    password { Faker::Internet.password }

    trait :admin do
      admin { true }
    end
  end
end
