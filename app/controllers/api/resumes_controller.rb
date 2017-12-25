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
        @resume = Resume.new(resume_params)
        
        if @resume.save
             render json: @resume
        #     puts "create hit"
         else
             render json: @resume.errors
             puts "create failed"
         end
        
       end

       private
      
       def resume_params
           params.require(:resume).permit(:company, :req, :title, :date, :ar, :notes)
       end
end