ARG RUBY_VERSION=3.4.2

FROM ruby:${RUBY_VERSION}

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./

RUN bundle install
