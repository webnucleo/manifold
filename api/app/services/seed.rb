require "securerandom"

class Seed
  # rubocop:disable Metrics/MethodLength
  def self.execute(logger = nil)
    logger ||= Logger.new(STDOUT)

    maybe_update_settings(logger)
    cli_user = make_cli_user(logger)
    make_feature(logger, cli_user)
    upgrade_system(logger)
  end

  def self.make_feature(logger, creator)
    return unless Feature.count.zero?
    logger.info("Creating placeholder feature".green)
    # rubocop:disable Metrics/LineLength
    Feature.create(
      header: "Welcome to Manifold. An Intuitive, collaborative, open-source platform for scholarly publishing",
      body: "With iterative texts, powerful annotation tools, rich media support, and robust community dialogue, Manifold transforms scholarly publications into living digital works.",
      link_text: "Learn More",
      link_url: "http://manifold.umn.edu/",
      style: "dark",
      foreground_position: "absolute",
      foreground: File.open(Rails.root.join("app", "assets", "images", "seed-feature-foreground.png")),
      creator: creator,
      foreground_top: "1.9em"
    )
    # rubocop:enable Metrics/LineLength
  end

  def self.maybe_update_settings(logger)
    logger.info("Potentially updating settings from the environment".green)
    Settings.potentially_update_from_environment!
  end

  def self.make_cli_user(logger)
    cli_user = User.find_or_initialize_by(
      email: "cli@manifold.app",
      first_name: "CLI",
      last_name: "User",
      is_cli_user: true
    )
    if cli_user.new_record?
      logger.info("Creating CLI user: #{cli_user.email}".green)
      pw = SecureRandom.hex
      cli_user.password = pw
      cli_user.password_confirmation = pw
      cli_user.save
    else
      logger.info("CLI User exists: #{cli_user.id}".green)
    end
    cli_user
  end

  def self.upgrade_system(logger)
    SystemUpgrades::Perform.run force: false, stdout: true
    logger.info("Running system upgrades".green)
  end

  # rubocop:enable Metrics/MethodLength
end
