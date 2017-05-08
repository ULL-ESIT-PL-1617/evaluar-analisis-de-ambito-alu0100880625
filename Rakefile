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


