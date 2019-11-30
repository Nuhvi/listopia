# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Favorite, type: :model do
  let(:favoriter) { FactoryBot.build(:favoriter) }
  let(:favoritePosting) { FactoryBot.build(:favoritePosting) }

  it 'has a valid factory' do
    expect(FactoryBot.build(:favorite)).to be_valid
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:user) }
    it { is_expected.to validate_presence_of(:posting) }
    # it 'validate that favorite is not dublicated' do
    #   friendship = FactoryBot.build(:friendship, favoriter: favoriter, friend: favoriter)
    #   expect(friendship).to be_invalid
    # end
    # it 'validate the favoriter - friend relation doesnt already exist' do
    #   FactoryBot.create(:friendship, favoriter: favoriter, friend: friend)
    #   friendship = FactoryBot.build(:friendship, favoriter: favoriter, friend: friend)
    #   expect(friendship).to be_invalid
    # end
  end

  # describe 'default scope' do
  #   let!(:friendship_one) { FactoryBot.create(:friendship, :accepted, favoriter: favoriter) }
  #   let!(:friendship_two) { FactoryBot.create(:friendship, :accepted, favoriter: favoriter) }
  #   let!(:friendship_three) { FactoryBot.create(:friendship, :accepted, favoriter: favoriter) }

  #   it 'orders comments in update chronological order' do
  #     expect(favoriter.friendships).to eq [friendship_three, friendship_two, friendship_one]
  #   end
  # end

  # describe 'associations' do
  #   it { is_expected.to belong_to(:favoriter) }
  #   it { is_expected.to belong_to(:friend) }
  #   it { is_expected.to have_one(:notification).dependent(:destroy) }
  # end

  # describe 'methods' do
  # end

  # describe 'callbacks' do
  #   context 'send a friend request to someone' do
  #     it 'creates another friendship for that favoriter with status: 1' do
  #       FactoryBot.create(:friendship, favoriter: favoriter, friend: friend)
  #       expect(Friendship.where(favoriter: favoriter, friend: friend).first.status).to eq(0)
  #       expect(Friendship.where(favoriter: friend, friend: favoriter).first.status).to eq(1)
  #     end

  #     it 'create a notification for requested' do
  #       FactoryBot.create(:friendship, favoriter: favoriter, friend: friend)
  #       expect(friend.notifications.last.notifiable.favoriter).to eq(favoriter)
  #       expect(favoriter.notifications.empty?).to be true
  #     end
  #   end

  #   context 'accept a friend request' do
  #     before do
  #       FactoryBot.create(:friendship, favoriter: favoriter, friend: friend)
  #       Friendship.all.each { |f| f.update(status: 2) }
  #     end

  #     it 'create a notification for the requester' do
  #       expect(favoriter.notifications.count).to eq(1)
  #       expect(favoriter.notifications.last.notifiable.favoriter).to eq(friend)
  #       expect(favoriter.notifications.last.notifiable.status).to eq(2)
  #     end

  #     it 'delete the old notification for the requested' do
  #       expect(friend.notifications.count).to eq(0)
  #     end
  #   end
  # end
end
