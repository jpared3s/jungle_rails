require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validations' do
    before(:each) do
      @user = User.new(email: "test@test.com", password: "password123", password_confirmation: "password123", first_name: "John", last_name: "Doe")
    end

    it 'should save successfully with all fields set' do
      expect(@user.save).to be_truthy
    end

    # Add other validation examples here

  end

  describe '.authenticate_with_credentials' do
    before(:each) do
      @user = User.create(email: "test@test.com", password: "password123", password_confirmation: "password123", first_name: "John", last_name: "Doe")
    end

    it 'should authenticate successfully with valid credentials' do
      authenticated_user = User.authenticate_with_credentials("test@test.com", "password123")
      expect(authenticated_user).to eq(@user)
    end

    it 'should not authenticate with invalid credentials' do
      authenticated_user = User.authenticate_with_credentials("test@test.com", "wrongpassword")
      expect(authenticated_user).to be_nil
    end

    # Edge case: email with leading and trailing spaces
    it 'should authenticate successfully with email containing spaces' do
      authenticated_user = User.authenticate_with_credentials("  test@test.com  ", "password123")
      expect(authenticated_user).to eq(@user)
    end

    # Edge case: mixed-case email
    it 'should authenticate successfully with mixed-case email' do
      authenticated_user = User.authenticate_with_credentials("tEsT@tEsT.cOm", "password123")
      expect(authenticated_user).to eq(@user)
    end

  end
end