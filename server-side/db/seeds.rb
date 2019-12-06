require 'factory_bot_rails'
# Reset by deleting users and dependents
User.destroy_all

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
