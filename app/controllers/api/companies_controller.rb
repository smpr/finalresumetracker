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
        @Company = Company.new(company_params)
        
        if @Company.save
             render json: @Company
        #     puts "create hit"
         else
             render json: @Company.errors
             puts "create failed"
         end
       end
       
    def update
      puts "company patch hit"
     @user = current_user
     @company = Company.find(params[:id])
      @user.company.update(company_params)
         render json: @company

        
      end
      def destroy
        Company.find(params[:id]).delete
    
        render status: :ok
      end
      private
      
          def company_params
              params.require(:company).permit(:name, :address, :phone, :industry, :logo, :city, :state, :zip)
          end
end
