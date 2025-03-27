ARG RUBY_VERSION=3.4.2

FROM ruby:${RUBY_VERSION}

WORKDIR /usr/src/app

RUN bundle init && bundle install

