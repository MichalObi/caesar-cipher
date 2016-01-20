# Require any additional compass plugins here.

require 'net/ftp'
 
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
javascripts_dir = "js"

line_comments = false
relative_assets = true
project_type = :stand_alone
output_style = :compressed
environment = :development

ftp_host = 'serwer1341979.home.pl' # Can be an IP
ftp_user = 'michal@modernfactory.pl' # FTP Username
ftp_pass = 'LvE2vJTREV9R' # FTP Password
 
TXT_FILE_OBJECT = File.new('D:/www/iti/HTML/css/style.css')
 
on_stylesheet_saved do |filename|
  Net::FTP.open( ftp_host, ftp_user , ftp_pass) do |ftp|
    ftp.putbinaryfile(TXT_FILE_OBJECT, "/dev/iti/css/#{File.basename(TXT_FILE_OBJECT)}")
    end
  puts ">>>> Compass is polling for changes. Press Ctrl-C to Stop"
end


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass