require 'rack/contrib/try_static'
require 'rack/rewrite'

use Rack::Rewrite do
  r301 %r{/(.*)/$}, "/$1"
  rewrite %r{/nk/?(.*)}, "/$1"
  r302 %r{/(.*)$}, "/nk/$1", :not => %r{/nk}
end

use Rack::TryStatic,
    :root => "_site",
    :urls => %w[/],
    :try => ['.html', 'index.html', '/index.html']

run lambda { [404, {'Content-Type' => 'text/html'}, ['Not Found']]}
