# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Favorite, type: :model do
  let(:favoriter) { FactoryBot.build(:favoriter) }
  let(:favorite_posting) { FactoryBot.build(:favorite_postings) }

  it 'has a valid factory' do
    expect(FactoryBot.build(:favorite)).to be_valid
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:user) }
    it { is_expected.to validate_presence_of(:posting) }
    #  Shoulda matchers scoped uniqueness_of validation has a bug as for Nov 30th 2019
    it 'validate the uniqueness_of(:posting).scoped_to(:user)' do
      user = FactoryBot.create(:favoriter)
      posting = FactoryBot.create(:favorite_postings)
      FactoryBot.create(:favorite, user: user, posting: posting)
      expect(FactoryBot.build(:favorite, user: user, posting: posting)).to be_invalid
    end
  end

  describe 'default scope' do
    let!(:favorite_one) { FactoryBot.create(:favorite) }
    let!(:favorite_two) { FactoryBot.create(:favorite) }
    let!(:favorite_three) { FactoryBot.create(:favorite) }

    it 'orders comments in create chronological order' do
      expect(Favorite.all).to eq [favorite_three, favorite_two, favorite_one]
    end
  end

  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:posting) }
  end

  describe 'methods' do
  end
end
