# frozen_string_literal: true

require 'socket'
require 'uri'
require_relative './modules/constants'
require_relative './modules/data_sender'
require_relative './modules/data_handler'

# HTTP Server Class
class HttpServer
  include DataHandler
  include DataSender

  attr_reader :server

  def initialize(host = '0.0.0.0', port = 3000)
    @host = host
    @port = port
    @server = nil
  end

  def setup_server
    @server = TCPServer.new(@host, @port)
    puts "Server listening on #{@host}:#{@port}"
  rescue Errno::EADDRINUSE
    puts "Error: Port #{@port} already in use."
    exit(1)
  end

  def start
    setup_server unless @server
    client = nil

    loop do
      client = @server.accept
      puts "Accepted connection from #{client.peeraddr.inspect}"
      handle_request(client)
    ensure
      client&.close
    end
  end

  def stop
    @server&.close
    @server = nil
    puts 'Server stopped.'
  end

  if __FILE__ == $PROGRAM_NAME
    server = HttpServer.new('0.0.0.0', 3000)

    begin
      server.start
    rescue Interrupt
      puts "\nShutting down server..."
      server.stop
    end
  end
end
