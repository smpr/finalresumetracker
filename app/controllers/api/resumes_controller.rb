class Api::ResumesController < ApplicationController
    before_action :authenticate_user!
def index
    puts "index hit"
end
end