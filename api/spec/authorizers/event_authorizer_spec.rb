require 'rails_helper'

RSpec.describe EventAuthorizer, :authorizer do
  context 'when the subject is an admin' do
    let(:subject) { FactoryBot.create(:user, role: Role::ROLE_ADMIN) }

    abilities = { create: false, update: false, read: false, delete: true }
    it_should_behave_like "an authorized user for a class", Event, abilities
  end

  context 'when the subject is a reader' do
    let(:subject) { FactoryBot.create(:user) }

    it_should_behave_like "an authorized user for a class", Event, none: true
  end
end
