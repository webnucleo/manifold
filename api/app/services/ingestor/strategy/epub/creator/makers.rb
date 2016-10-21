module Ingestor
  module Strategy
    module EPUB
      module Creator
        # Creates Manifold Makers from an EPUB document metadata.
        #
        # @author Zach Davis
        class Makers < BaseCreator
          DEFAULT_ATTRIBUTES = {
          }.freeze

          def create(nodes, existing = nil, role = nil)
            makers = nodes.each_with_index.map do |node, _index|
              node_inspector = Inspector::Metadata.new(node, @metadata_node)
              attr = defaults(DEFAULT_ATTRIBUTES, attributes(node_inspector))
              existing_maker = check_for_existing(existing, name: attr[:name])
              existing_maker = Maker.find_by(name: attr[:name]) unless existing_maker
              maker = existing_maker ? existing_maker : Maker.create(attr)
              maker.update_attributes(attr)
              log_maker(maker, role)
              maker
            end
            makers
          end

          private

          def log_maker(maker, role)
            k = if maker.new_record?
                  "services.ingestor.strategy.ePUB.log.new_maker"
                else
                  "services.ingestor.strategy.ePUB.log.updated_maker"
                end
            debug(k, name: maker.name, role: role)
          end

          def attributes(node_inspector)
            {
              name: node_inspector.text,
              sort_name: node_inspector.file_as
            }
          end
        end
      end
    end
  end
end
