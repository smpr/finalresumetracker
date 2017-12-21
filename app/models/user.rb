class User < ActiveRecord::Base
  has_one :info
  has_many :companies
  has_many :resumes
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable
  include DeviseTokenAuth::Concerns::User
end
