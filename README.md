# RailsCasts Backbone on Rails Raffler

This is the JavaScript version (without CoffeeScript) and using [Handlerbars template engine](http://handlebarsjs.com/) (through [handlebars_assets gem](https://github.com/leshill/handlebars_assets)) full Raffler application.

See RailsCasts [#323 Backbone on Rails Part 1](http://railscasts.com/episodes/323-backbone-on-rails-part-1) and [#325 Backbone on Rails Part 2](http://railscasts.com/episodes/325-backbone-on-rails-part-2).

## Environment
    brew update
    brew install rbenv
    brew install ruby-build
    brew install rbenv-gemset
    rbenv install 1.9.3-p429
    rbenv global 1.9.3-p429

## Running
    git clone https://github.com/matheustardivo/raffler.git
    cd raffler
    gem install bundler
    rbenv rehash
    bundle install
    rbenv rehash
    rake db:migrate
    rake db:seed
    rails s

## Production

Make a temporarily change to `config/environments/production.rb` in the following line:

```ruby
  config.serve_static_assets = true
```

Then run the following commands:

    RAILS_ENV=production bundle exec rake db:migrate
    RAILS_ENV=production bundle exec rake db:seed
    RAILS_ENV=production bundle exec rails s
