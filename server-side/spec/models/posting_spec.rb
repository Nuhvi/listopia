# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Posting, type: :model do
  it 'has a valid factory' do
    expect(FactoryBot.build(:posting)).to be_valid
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_uniqueness_of(:title) }
    it { is_expected.to validate_length_of(:title).is_at_least(6).is_at_most(40) }
    it { is_expected.to validate_presence_of(:price) }
    it { is_expected.to validate_presence_of(:desc) }
    it { is_expected.to validate_length_of(:desc).is_at_most(280) }
    it { is_expected.to validate_presence_of(:category) }
  end

  describe 'associations' do
    xit { is_expected.to belong_to(:user) }
  end

  describe 'default scope' do
    let!(:posting_one) { FactoryBot.create(:posting) }
    let!(:posting_two) { FactoryBot.create(:posting) }
    let!(:posting_three) { FactoryBot.create(:posting) }

    xit 'orders postings in update chronological order' do
      expect(Posting.all).to eq [posting_three, posting_two, posting_one]
    end
  end

  describe 'methods' do
  end
end
