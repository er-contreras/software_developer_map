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

  describe '#setup_server' do
    let(:mock_tcp_server) { instance_double(TCPServer, close: nil) }

    before do
      allow(TCPServer).to receive(:new).with(host, port).and_return(mock_tcp_server)
    end

    it 'creates a TCPServer with the correct host and port' do
      expect(TCPServer).to receive(:new).with(host, port).and_return(mock_tcp_server)
      server.setup_server
    end

    it 'assigns the created server to @server' do
      server.setup_server
      expect(server.instance_variable_get(:@server)).to eq(mock_tcp_server)
    end

    it 'prints a listening message' do
      expect { server.setup_server }.to output(/Server listening on #{host}:#{port}/).to_stdout
    end
  end

  describe '#setup_server when port is in use' do
    before do
      allow(TCPServer).to receive(:new).with(host, port).and_raise(Errno::EADDRINUSE)
      allow(server).to receive(:exit).with(1)
    end

    it 'failes because of port is in use' do
      expect { server.setup_server }.to output(/Error: Port #{port} already in use./).to_stdout
      expect(server).to have_received(:exit).with(1)
    end
  end
end
