# frozen_string_literal: true

require 'spec_helper'
require 'http_server'
require 'socket'

RSpec.describe HttpServer do
  let(:host) { '127.0.0.1' }
  let(:port) { 3001 }

  subject(:server) { described_class.new(host, port) }

  describe '#initialize' do
    it 'initializes with host and port' do
      expect(server.instance_variable_get(:@server)).to be_nil
    end
  end
end
