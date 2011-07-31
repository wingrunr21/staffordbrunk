def jekyll(opts="", path="")
  sh "rm -rf _site"
  sh path + "jekyll " + opts
end

desc "Build site using Jekyll"
task :build do
  jekyll '--no-auto'
end

desc "Serve on Localhost with port 4000"
task :default do
  jekyll "--server --auto"
end

desc "Deploy to Dev"
task :deploy => :"deploy:live"

namespace :deploy do
  desc "Deploy"
  task :live => :build do
    sh "git push origin master"
    rsync "staffordb.ru"
  end

  def rsync(domain)
    sh "rsync -avtz --rsh='ssh -p2282' _site/ wingrunr21@northpolesoftware.com:~/#{domain}/public/nk/"
  end
end
