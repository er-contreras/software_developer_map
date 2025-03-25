module DataSender
  def send_response(client, status, body, content_type)
    client.puts "HTTP/1.1 #{status}\r\n" \
                  "Content-Type: #{content_type}\r\n" \
                  "Content-Length: #{body.bytesize}\r\n" \
                  "Connection: Keep-Alive\r\n\r\n" \
                  "#{body}"
  end
end
