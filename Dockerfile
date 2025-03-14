FROM ruby:3.4.2 AS development

WORKDIR /usr/src/app

COPY . .

RUN bundle install
