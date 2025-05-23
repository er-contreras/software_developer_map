# frozen_string_literal: true

require 'json'

# DataHandler
module DataHandler
  def handle_request(client)
    request_line = client.gets

    unless request_line
      send_response(client, 400, 'Bad Request', 'text/plain')
      return
    end

    method, path, _http_version = request_line.split

    case method
    when 'GET'
      handle_get_request(client, path)
    when 'POST'
      handle_post_request(client, path)
    else
      send_response(client, 405, 'Method Not Allowed', 'text/plain')
    end
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

  def read_headers(client)
    content_length_header = nil
    headers = {}

    while (line = client.gets&.chomp) && !line.empty?
      content_length_header = line if line.downcase.start_with?('content-length:')

      parts = line.split(':', 2)

      headers[parts[0].strip.downcase] = parts[1].strip if parts.length == 2
    end

    content_length_header
  end

  def content_length(client)
    content_length_header = read_headers(client)

    if content_length_header
      content_length = content_length_header.split(':')[1].strip.to_i
      body = client.read(content_length)

      parsed_body = JSON.parse(body)
      p parsed_body

      task_value = parsed_body['task']
      puts "Task data: #{task_value}"
    end

    content_length
  end

  def handle_post_request(client, path)
    case path
    when '/post'
      parsed_body = content_length(client)

      send_response(
        client,
        200,
        JSON.generate({ message: 'Task has been created successfully', received_data: parsed_body }),
        'application/json'
      )
    end
  end
end
