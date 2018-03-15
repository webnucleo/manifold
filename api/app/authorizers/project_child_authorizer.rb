class ProjectChildAuthorizer < ApplicationAuthorizer
  def self.updatable_by?(_user)
    true
  end

  def self.creatable_by?(_user)
    true
  end

  def self.readable_by?(_user)
    true
  end

  def self.deletable_by?(_user)
    true
  end

  def creatable_by?(user)
    user.can_update? resource.project
  end

  def readable_by?(user)
    user.can_read? resource.project
  end

  def updatable_by?(user)
    user.can_update? resource.project
  end

  def deletable_by?(user)
    user.can_delete? resource.project
  end
end
