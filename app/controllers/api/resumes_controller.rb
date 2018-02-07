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
       def update
        puts "company patch hit"
    
   
          Resume.find(params[:id]).update(resume_params)
          
        end
        def destroy
          Resume.find(params[:id]).delete
      
          render status: :ok
        end
       private
      
       def resume_params
           params.require(:resume).permit(:company, :req, :title, :date, :ar, :notes)
       end
end