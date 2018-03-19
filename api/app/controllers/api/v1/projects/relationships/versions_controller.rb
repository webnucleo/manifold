module Api
  module V1
    module Projects
      module Relationships
        class VersionsController < ApplicationController
          before_action :set_project, only: [:index]

          resourceful! Version do
            Version.filter(
              with_pagination!(version_filter_params),
              scope: @project.tracked_dependent_versions.with_actor
            )
          end

          def index
            @versions = load_versions
            render_multiple_resources(
              @versions,
              each_serializer: VersionSerializer,
              location: api_v1_project_relationships_versions_url(@project)
            )
          end

          private

          def set_project
            @project = Project.friendly.find(params[:project_id])
          end
        end
      end
    end
  end
end
