require 'rails_helper'

RSpec.describe AnnotationAuthorizer, :authorizer do
  let(:user) { FactoryBot.create(:user) }
  let(:admin) { FactoryBot.create(:user, role: Role::ROLE_ADMIN) }
  let(:creator) { FactoryBot.create(:user) }
  let(:object) { FactoryBot.create(:annotation, creator: creator, private: false) }

  context 'when the subject is an admin' do
    let(:subject) { admin }

    it_should_behave_like "an authorized user for an instance", Annotation, all: true
  end

  context 'when the subject is a reader' do
    let(:subject) { user }
    abilities = { create: true, read: true, update: false, delete: false }

    it_should_behave_like "an authorized user for an instance", Annotation, abilities
  end

  context 'when the subject is the resource creator' do
    let(:subject) { creator }
    abilities = { all: true }

    it_should_behave_like "an authorized user for an instance", Annotation, abilities
  end

end
