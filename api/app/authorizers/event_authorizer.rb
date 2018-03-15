class EventAuthorizer < ApplicationAuthorizer

  def self.deletable_by?(user)
    user.admin? || user.editor?
  end

end
