class Api::ResumesController < ApplicationController
    before_action :authenticate_user!
    def index
        @info = current_user.info
         render json: @info
      end
def show
    puts "Show"
end
      def create
        @user = current_user
        @user.create_resume(resume_params)
        puts "succesful resume creation"
       end

       private
      
       def resume_params
           params.require(:resume).permit(:company, :req, :title, :date, :ar, :notes)
       end
end