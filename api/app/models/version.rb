class Version < PaperTrail::Version
  include Authority::Abilities
  include Filterable

  delegate :title, :title_formatted, to: :item, prefix: true

  belongs_to :parent_item,
             polymorphic: true,
             optional: true

  scope :with_actor, -> { where.not(whodunnit: nil) }
end
