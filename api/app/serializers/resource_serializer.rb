# Provides a serialization of a resource model.
class ResourceSerializer < ActiveModel::Serializer
  cache key: "resource", expires_in: 3.hours
  attributes :title, :kind, :attachment_url, :attachment_file_name,
             :attachment_content_type, :attachment_file_size, :attachment_updated_at,
             :created_month, :created_day, :created_year, :updated_at, :project_id,
             :caption, :description, :fingerprint, :keywords, :alt_text,
             :copyright_status, :copyright_holder, :credit, :external_url, :external_id,
             :external_type, :allow_high_res, :allow_download, :doi, :high_res_file_name,
             :high_res_content_type, :high_res_file_size, :high_res_updated_at,
             :transcript_file_name, :transcript_content_type, :transcript_file_size,
             :transcript_updated_at, :translation_file_name, :translation_content_type,
             :translation_file_size, :translation_updated_at, :attachment_thumbnail_url

  has_many :collections
  belongs_to :project

  def created_month
    object.created_at.strftime("%-m")
  end

  def created_year
    object.created_at.strftime("%-Y")
  end

  def created_day
    object.created_at.strftime("%-d")
  end

end