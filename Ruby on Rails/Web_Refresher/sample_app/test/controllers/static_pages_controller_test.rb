require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase

	def setup
		@title_end = "| Ruby on Rails Tutorial Sample App"
	end

  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "Home #{@title_end}"
  end

  test "should get help" do
    get :help
    assert_response :success
    assert_select "title", "Help #{@title_end}"
  end

  test "should get about" do
    get :about
    assert_response :success
    assert_select "title", "About #{@title_end}"
  end

end
