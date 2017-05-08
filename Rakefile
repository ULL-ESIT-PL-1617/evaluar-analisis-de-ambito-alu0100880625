PEGJS = "pegjs"
task :default => :exe

desc "Compile grammar.pegjs"
task :compile do
  sh "#{PEGJS} grammar.pegjs"
end

desc "Run main.js"
task :exe => :compile do
  sh "node main.js"
end

desc "Run mainfromfile.js input1"
task :run => :compile do
  sh "node mainfromfile.js input1"
end

desc "Run mainfromfile.js input2"
task :run2 => :compile do
  sh "node mainfromfile.js input2"
end

desc "Run mainfromfile.js input3"
task :run3 => :compile do
  sh "node mainfromfile.js input3"
end

desc "rm grammar.js"
task :clean do
  sh "rm grammar.js"
end

desc "Run mainfromfile.js inputfunction"
task :runf => :compile do
  sh "node mainfromfile.js inputfunction"
end

desc "Run mainfromfile.js inputfunctiondef"
task :runfd => :compile do
  sh "node mainfromfile.js inputfunctiondef"
end

desc "Run mainfromfile.js inputfunctiondef2"
task :runfd2 => :compile do
  sh "node mainfromfile.js inputfunctiondef2"
end

desc "Run mainfromfile.js inputfunfun"
task :runfun => :compile do
  sh "node mainfromfile.js inputfunfun"
end

desc "Run mainfromfile.js inputfunction2"
task :runf2 => :compile do
  sh "node mainfromfile.js inputfunction2"
end

desc "Run mainfromfile.js inputfunction3"
task :runf3 => :compile do
  sh "node mainfromfile.js inputfunction3"
end

desc "Run mainfromfile.js inputfunction4"
task :runf4 => :compile do
  sh "node mainfromfile.js inputfunction4"
end
