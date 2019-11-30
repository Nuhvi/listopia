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
    it {
      expect(FactoryBot.create(:posting))
        .to validate_inclusion_of(:category)
        .in_array(%w[Apartment House Room Land Other])
        .with_message('shoulda-matchers test string is not a valid category')
    }
  end

  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to have_many(:favorites).dependent(:destroy) }
    it { is_expected.to have_many(:favoriters) }
  end

  describe 'default scope' do
    let!(:posting_one) { FactoryBot.create(:posting) }
    let!(:posting_two) { FactoryBot.create(:posting) }
    let!(:posting_three) { FactoryBot.create(:posting) }

    it 'orders postings in create chronological order' do
      expect(Posting.all).to eq [posting_three, posting_two, posting_one]
    end
  end

  describe 'methods' do
    # let(:user) { FactoryBot.create(:user) }
    # let(:posting) { FactoryBot.create(:friend) }

    # describe 'favorited' do.
    #   before do
    #     2.times { FactoryBot.create(:notification, user: user) }
    #   end

    #   it 'checks if the Posting is favorited' do
    #     expect(Posting.all).to eq [posting_three, posting_two, posting_one]
    #   end
    # end
  end
end
