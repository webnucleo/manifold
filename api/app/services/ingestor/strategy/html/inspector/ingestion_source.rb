require "digest"

module Ingestor
  module Strategy
    module Html
      module Inspector
        class IngestionSource < ::Ingestor::Inspector::IngestionSourceInspector

          attr_reader :rel_path, :ingestion

          def initialize(rel_path, ingestion)
            @rel_path = rel_path
            @ingestion = ingestion
          end

          def source_identifier
            Digest::MD5.hexdigest(rel_path)
          end

          def basename
            File.basename(rel_path)
          end

          def ext
            File.extname(basename).split(".").last
          end

          def source_path
            rel_path
          end

          def kind
            return ::IngestionSource::KIND_SECTION if ext == "html"
            ::IngestionSource::KIND_PUBLICATION_RESOURCE
          end

          def attachment
            ingestion.open(rel_path)
          end

        end
      end
    end
  end
end
