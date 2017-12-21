class Api::CompaniesController < ApplicationController
    
    def index
        # @info = current_user.info
        @companies = Company.all
        render json: @companies
        puts "Index Hit"
      end

    def show
        @company = Company.find(params[:id])
        render json: @company
    end
    def create
        @company = Company.new(company_params)
        
        if @company.save
             render json: @company
        #     puts "create hit"
         else
             render json: @company.errors
             puts "create failed"
         end
        
       end
    def update
      puts "info patch hit"
     @user = current_user
      #   # @info = Info.find(params[:id])
      @user.info.update(info_params)
      #     render json: @info

        
      end
      def destroy
        @info = Info.find(params[:id]).delete
    
        render status: :ok
      end
      private
      
          def company_params
              params.require(:company).permit(:name, :address, :phone, :industry, :logo, :city, :state, :zip)
          end
end
