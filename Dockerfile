ARG RUBY_VERSION=3.4.2

FROM ruby:${RUBY_VERSION}

WORKDIR /usr/src/app

# Run the application as a non-root user.
# USER ruby

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 8080

# Run the application.
CMD ruby server/src/http_server.rb
