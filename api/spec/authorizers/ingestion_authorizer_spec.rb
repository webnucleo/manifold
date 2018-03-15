require 'rails_helper'

RSpec.describe IngestionAuthorizer, :authorizer do
  context 'when the subject is an admin' do
    let(:subject) { FactoryBot.create(:user, role: Role::ROLE_ADMIN) }

    abilities = { create: true, update: true, read: true, delete: false }
    it_should_behave_like "an authorized user for a class", Ingestion, abilities
  end

  context 'when the subject is a reader' do
    let(:subject) { FactoryBot.create(:user) }

    abilities = { create: false, update: false, read: true, delete: false }
    it_should_behave_like "an authorized user for a class", Ingestion, abilities
  end
end
