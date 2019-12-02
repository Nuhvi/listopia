guard :rspec, cmd: 'bundle exec rspec' do
  watch(%r{^app/*}) { 'spec' }
  watch(%r{^spec/*}) { 'spec' }
  watch('config/routes.rb') { 'spec' }
end