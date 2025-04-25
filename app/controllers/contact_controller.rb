class ContactController < ApplicationController
  def index
    render inertia: "ContactPage", props: {
      name: params.fetch(:name, "Contact Page")
  }
  end
end
