class AboutController < ApplicationController
  def index
    render inertia: "AboutPage", props: {
      name: params.fetch(:name, "About Page")
    }
  end
end
