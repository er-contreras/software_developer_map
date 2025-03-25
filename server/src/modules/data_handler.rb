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
