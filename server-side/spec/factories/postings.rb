# frozen_string_literal: true

FactoryBot.define do
  factory :posting do
    title { 'MyString' }
    price { 1 }
    desc { 'MyText' }
  end
end
