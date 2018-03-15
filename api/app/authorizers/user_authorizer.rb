class UserAuthorizer < ApplicationAuthorizer

  def self.creatable_by?(user)
    return true unless user
    user.admin? || user.editor?
  end

  def self.updatable_by?(user)
    user.admin? || user.editor?
  end

  def self.readable_by?(user)
    user.admin? || user.editor?
  end

  def self.deletable_by?(user)
    user.admin? || user.editor?
  end

  def updatable_by?(user)
    resource == user || user.admin? || user.editor?
  end

  def readable_by?(user)
    resource == user || user.admin? || user.editor?
  end

end
