FROM ruby:3.2.1

WORKDIR /app/rails-app

ENV RUBYOPT -EUTF-8

COPY rails-app /app/rails-app
RUN bundle install

VOLUME /app/rails-app/public
VOLUME /app/rails-app/tmp

CMD ["bundle", "exec", "puma"]
