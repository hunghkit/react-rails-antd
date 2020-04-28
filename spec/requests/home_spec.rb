require 'rails_helper'

describe HomeController do
  describe "#index" do
    before { get root_url }

    it { expect(response).to render_template :index }
  end
end