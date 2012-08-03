def jekyll(opts="", path="")
  sh "rm -rf _site"
  sh path + "jekyll " + opts
end

desc "Build site using Jekyll"
task :build do
  jekyll '--no-auto'
end

desc "Serve on localhost with port 4000"
task :default do
  jekyll "--server --auto"
end

desc "Deploy the site"
task :deploy => :"deploy:live"

namespace :deploy do
  desc "Deploy"
  task :live => :build do
    sh "git push origin master"
    sh "git push heroku master"
  end
end
