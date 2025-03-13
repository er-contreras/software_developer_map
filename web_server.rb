require 'socket'
require 'uri'

class HttpServer
  HTML_CONTENT = File.read('./index.html')
  CSS_CONTENT = File.exist?('./styles/style.css') ? File.read('./styles/style.css') : "File style.css doesn't exist!"
  JS_CONTENT = File.exist?("./main.js") ? File.read("./main.js") : "File main.js doesn't exist!"
  MODULE_CONSTANTS = File.exist?("./modules/constants.js") ? File.read("./modules/constants.js") : "File constants.js doesn't exist!"
  MODULE_FORM = File.exist?("./modules/form.js") ? File.read("./modules/form.js") : "File form.js doesn't exist!"
  MODULE_TASK_MANAGER = File.exist?("./modules/taskManager.js") ? File.read("./modules/taskManager.js") : "File taskManager.js doesn't exist!"

  def initialize
    @server = TCPServer.new('localhost', 3000)
  end

  def start
    loop do
      client = @server.accept
      handle_request(client)
      client.close
    end
  end

  private

  def handle_request(client)
    request_line = client.gets

    unless request_line
      send_response(client, 400, 'Bad Request', 'text/plain')
      return
    end

    method, path, http_version = request_line.split

    case method
    when 'GET'
      handle_get_request(client, path)
    when 'POST'
      handle_post_request(client, path)
    else
      send_response(client, 405, 'Method Not Allowed', 'text/plain')
    end
  end

  def send_response(client, status, body, content_type)
    client.puts "HTTP/1.1 #{status}\r\n" \
                  "Content-Type: #{content_type}\r\n" \
                  "Content-Length: #{body.bytesize}\r\n" \
                  "Connection: Keep-Alive\r\n\r\n" \
                  "#{body}"
  end

  def handle_get_request(client, path)
    case path
    when '/'
      send_response(client, 200, HTML_CONTENT, 'text/html')
    when '/styles/style.css'
      send_response(client, 200, CSS_CONTENT, 'text/css')
    when '/main.js'
      send_response(client, 200, JS_CONTENT, 'text/javascript')
    when '/modules/constants.js'
      send_response(client, 200, MODULE_CONSTANTS, 'text/javascript')
    when '/modules/form.js'
      send_response(client, 200, MODULE_FORM, 'text/javascript')
    when '/modules/taskManager.js'
      send_response(client, 200, MODULE_TASK_MANAGER, 'text/javascript')
    else
      send_response(client, 404, 'Not Found', 'text/plain')
    end
  end
end

server = HttpServer.new
server.start
