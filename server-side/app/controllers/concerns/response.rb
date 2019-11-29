# frozen_string_literal: true

module Response
  def json_response(object, status = :ok)
    render json: {
      status: status,
      data: object
    }, status: status
  end
end
