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

  def initialize
    @server = TCPServer.new('0.0.0.0', 3000)
  end

  def start
    loop do
      client = @server.accept
      handle_request(client)
      client.close
    end
  end
end

server = HttpServer.new
server.send :start
