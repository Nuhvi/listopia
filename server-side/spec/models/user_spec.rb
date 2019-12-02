# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  it 'has a valid factory' do
    expect(FactoryBot.build(:user)).to be_valid
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
    it { is_expected.to validate_presence_of(:password) }
    it { is_expected.to validate_length_of(:password).is_at_least(6) }
    it { is_expected.to validate_presence_of(:first_name) }
    it { is_expected.to validate_presence_of(:last_name) }
  end

  describe 'associations' do
    it { is_expected.to have_many(:postings).dependent(:destroy) }
    it { is_expected.to have_many(:favorites).dependent(:destroy) }
    it { is_expected.to have_many(:favorite_postings) }
  end

  describe 'methods' do
    let(:user) { FactoryBot.create(:user) }
    let(:posting) { FactoryBot.create(:posting) }

    describe 'toggle_favorite' do
      it 'adds toggle posting in an out of favorites' do
        expect do
          user.toggle_favorite(posting)
        end.to change { user.favorite_postings.count }.by(1)
        expect do
          user.toggle_favorite(posting)
        end.to change { user.favorite_postings.count }.by(-1)
      end
    end
  end
end
