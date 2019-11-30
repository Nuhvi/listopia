FactoryBot.define do
  factory :favorite do
    association :user
    association :posting
  end
end
