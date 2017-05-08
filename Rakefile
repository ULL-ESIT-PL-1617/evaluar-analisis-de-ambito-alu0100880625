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

desc "Run mainfromfile.js inputs/input1"
task :run => :compile do
  sh "node mainfromfile.js inputs/input1"
end

desc "Run mainfromfile.js inputs/input2"
task :run2 => :compile do
  sh "node mainfromfile.js inputs/input2"
end

desc "Run mainfromfile.js inputs/input3"
task :run3 => :compile do
  sh "node mainfromfile.js inputs/input3"
end

desc "rm grammar.js"
task :clean do
  sh "rm grammar.js"
end

desc "Run mainfromfile.js inputs/inputfunction"
task :runf => :compile do
  sh "node mainfromfile.js inputs/inputfunction"
end

desc "Run mainfromfile.js inputs/inputfunctiondef"
task :runfd => :compile do
  sh "node mainfromfile.js inputs/inputfunctiondef"
end

desc "Run mainfromfile.js inputs/inputfunctiondef2"
task :runfd2 => :compile do
  sh "node mainfromfile.js inputs/inputfunctiondef2"
end

desc "Run mainfromfile.js inputs/inputfunfun"
task :runfun => :compile do
  sh "node mainfromfile.js inputs/inputfunfun"
end

desc "Run mainfromfile.js inputs/inputfunction2"
task :runf2 => :compile do
  sh "node mainfromfile.js inputs/inputfunction2"
end

desc "Run mainfromfile.js inputs/inputfunction3"
task :runf3 => :compile do
  sh "node mainfromfile.js inputs/inputfunction3"
end

desc "Run mainfromfile.js inputs/inputfunction4"
task :runf4 => :compile do
  sh "node mainfromfile.js inputs/inputfunction4"
end
