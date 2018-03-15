class TwitterQueryAuthorizer < ApplicationAuthorizer

  def self.updatable_by?(user)
    user.kind != Role::ROLE_READER
  end

  def self.creatable_by?(user)
    user.admin? || user.editor? || user.marketeer?
  end

  def self.readable_by?(user)
    user.kind != Role::ROLE_READER
  end

  def self.deletable_by?(user)
    user.kind != Role::ROLE_READER
  end

  def readable_by?(user)
    user.can_read? resource.project
  end

  def updatable_by?(user)
    user.can_update? resource.project
  end

  def deletable_by?(user)
    user.can_update? resource.project
  end
end
