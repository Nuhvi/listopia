require 'factory_bot_rails'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Admin
FactoryBot.create(:user, email:      "admin@listopia.com", 
                         password:   'foobar',
                         first_name: 'Ar',
                         last_name:  'Nazeh',
                         admin:       true)

# Users
5.times.each { |i| FactoryBot.create(:user) }

# Postings
50.times.each { |i| FactoryBot.create(:posting, user: User.all.sample) }

# Favorites
10.times.each { |i| FactoryBot.create(:favorite, user: User.all.sample,  posting: Posting.all.sample) }
