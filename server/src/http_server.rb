require 'socket'
require 'uri'
require_relative './modules/constants.rb'
require_relative './modules/data_sender.rb'
require_relative './modules/data_handler.rb'

class HttpServer
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
server.start
