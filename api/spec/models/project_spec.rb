require "rails_helper"

RSpec.describe Project, type: :model do
  it "has a valid factory" do
    expect(FactoryBot.build(:project)).to be_valid
  end

  it "updates the sort_title when saved" do
    project = FactoryBot.build(:project, title: "A Hobbit's Journey")
    project.save
    expect(project.sort_title).to eq "Hobbit's Journey"
    project.title = "The end of the world"
    project.save
    expect(project.sort_title).to eq "end of the world"
  end

  it "has many collaborators" do
    project = Project.new
    5.times { project.collaborators << Collaborator.new }
    expect(project.collaborators.length).to be 5
  end

  it "has many creators" do
    project = Project.new
    2.times { project.creators.build }
    expect(project.creators.length).to be 2
  end

  it "has many texts" do
    project = Project.new
    3.times { project.texts.build }
    expect(project.texts.length).to be 3
  end

  it "has many project_subjects" do
    project = Project.new
    3.times { project.project_subjects.build }
    expect(project.project_subjects.length).to be 3
  end

  it "has many contributors" do
    project = Project.new
    2.times { project.contributors.build }
    expect(project.contributors.length).to be 2
  end

  it "has a cover attachment" do
    is_expected.to have_attached_file(:cover)
  end

  it "does not require a cover" do
    is_expected.to_not validate_attachment_presence(:cover)
  end

  it "validates the cover attachment type" do
    is_expected.to validate_attachment_content_type(:cover)
      .allowing("image/png", "image/gif", "image/jpg", "image/jpeg", "image/svg+xml")
      .rejecting("text/plain", "text/xml")
  end

  it "is valid with a creator" do
    creator = FactoryBot.create(:user)
    project = FactoryBot.create(:project, creator: creator)
    expect(project).to be_valid
  end

  it "is invalid without a creator" do
    project = FactoryBot.build(:project, creator: nil)
    expect(project).to_not be_valid
  end

  it "triggers an event on create" do
    expect {
      project = FactoryBot.create(:project)
    }.to have_enqueued_job(CreateEventJob)
  end

  it "does not trigger an event on new" do
    expect {
      project = FactoryBot.build(:project)
    }.to_not have_enqueued_job(CreateEventJob)
  end

  it "is created as a draft" do
    project = FactoryBot.build(:project)
    expect(project.draft).to be(true)
  end

  it "is invalid without draft state" do
    project = FactoryBot.build(:project, draft: nil)
    expect(project).to_not be_valid
  end

  it "reports that it's following twitter accounts if at least one twitter_query association" do
    project = FactoryBot.build(:project)
    FactoryBot.create(:twitter_query, project: project)
    expect(project.following_twitter_accounts?).to be true
  end

  it "reports that it's not following twitter accounts if none are associated" do
    project = FactoryBot.build(:project)
    expect(project.following_twitter_accounts?).to be false
  end

  it "correctly returns the uncollected resource count" do
    project = FactoryBot.create(:project)
    collection = FactoryBot.create(:collection, project: project)
    resource_1 = FactoryBot.create(:resource, project: project)
    resource_2 = FactoryBot.create(:resource, project: project)
    resource_3 = FactoryBot.create(:resource, project: project)
    collection_resource = FactoryBot.create(
      :collection_resource,
      resource: resource_1,
      collection: collection
    )
    expect(project.uncollected_resources.count).to be 2
  end

  context "can be searched", :elasticsearch do

    it "by title" do
      @project_a = FactoryBot.create(:project, title: "Bartholomew Smarts", featured: true)
      @project_b = FactoryBot.create(:project, title: "Rambo Smarts", featured: true)
      Project.reindex
      Project.searchkick_index.refresh
      results = Project.filter({keyword: "Bartholomew"})
      expect(results.length).to be 1
      results = Project.filter({keyword: "Smarts"})
      expect(results.length).to be 2
    end
  end

  context "can be filtered" do

    before(:each) do
      @subject_a = FactoryBot.create(:subject, name: "subject_a")
      @subject_b = FactoryBot.create(:subject, name: "subject_b")
      @project_a = FactoryBot.create(:project, title: "project_a", featured: true)
      @project_b = FactoryBot.create(:project, title: "project_b", featured: false)
      @project_a.subjects = [@subject_a]
      @project_b.subjects = [@subject_b]
      @project_a.save
      @project_b.save
    end

    it "to only include featured" do
      results = Project.filter({featured: true})
      expect(results.length).to be 1
    end

    it "to only include not featured" do
      results = Project.filter({featured: false})
      expect(results.length).to be 1
    end

    it "to only include projects of a specific subject" do
      results = Project.filter({subject: @subject_a})
      expect(results.first).to eq @project_a
      results = Project.filter({subject: @subject_b})
      expect(results.first).to eq @project_b
    end

    it "by both subject and featured" do
      results = Project.filter({subject: @subject_a, featured: false})
      expect(results.length).to be 0
      results = Project.filter({subject: @subject_a, featured: true})
      expect(results.length).to be 1
    end

    it "allows boolean and string featured values" do
      results = Project.filter({featured: "true"})
      expect(results.length).to be 1
    end

    it "allows treats 1 as true when filtering" do
      results = Project.filter({featured: "1"})
      expect(results.length).to be 1
      results = Project.filter({featured: 1})
      expect(results.length).to be 1
    end

  end

  describe "its metadata" do

    it "can be set" do
      p = FactoryBot.build(:project)
      p.metadata = { "isbn" => "1234" }
      p.save
      expect(p.metadata["isbn"]).to eq "1234"
    end

    it "filters out invalid metadata" do
      p = FactoryBot.build(:project)
      p.metadata = { "isbn" => "1234", "foo" => "bar" }
      p.save
      expect(p.metadata).to eq({ "isbn" => "1234" })
    end

    it "filters out blank metadata" do
      p = FactoryBot.build(:project)
      p.metadata = { "isbn" => "1234", "foo" => "" }
      p.save
      expect(p.metadata).to eq({ "isbn" => "1234" })
    end

  end

  context "when avatar is present" do
    let(:avatar_path) { File.join("spec", "data", "assets", "images", "test_avatar.jpg") }
    let(:avatar) { File.new(avatar_path) }

    it "is valid without avatar color" do
      project = FactoryBot.build(:project, avatar: avatar)
      expect(project).to be_valid
    end
  end

  context "when avatar is not present" do
    it "is invalid without an avatar color" do
      project = FactoryBot.build(:project, avatar_color: nil)
      expect(project).to_not be_valid
    end

    it "is invalid with an avatar color not in list" do
      project = FactoryBot.build(:project, avatar_color: "none more black")
      expect(project).to_not be_valid
    end
  end

  context "when citations are updated" do
    before(:each) do
      @calling_class = FactoryBot.create(:project, title: "A Title")
      @child_class = FactoryBot.create(:text, project: @calling_class)
    end

    include_examples "a citable class with_citable_children"
  end


end
