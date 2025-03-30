# frozen_string_literal: true

desc 'Build Docker Compose services'
task(:build) { sh 'sudo docker compose build' }

desc 'Up Docker Compose service'
task(:up) { sh 'sudo docker compose up' }

desc 'Down Docker Compose service'
task(:down) { sh 'sudo docker compose down' }

desc 'Run RSpec service '
task(:rspec) { sh 'sudo docker compose run --rm app rspec' }
