class Api::ResumesController < ApplicationController
    before_action :authenticate_user!
    def index
        @resume = current_user.resumes
         render json: @resume
      end
      def show
        @resume = Resume.find(params[:id])
        render json: @resume
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