# frozen_string_literal: true

module SetUser
  extend ActiveSupport::Concern

  included do
    before_action :set_user
  end

  def set_user
    @user = User.first
  end
end
