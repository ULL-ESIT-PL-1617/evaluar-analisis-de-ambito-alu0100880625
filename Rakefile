PEGJS = "pegjs"
task :default => :exe

desc "Compile grammar.pegjs"
task :compile do
  sh "#{PEGJS} grammar.pegjs"
end

desc "Run and use the parser generated from grammar.pegjs"
task :exe => :compile do
  sh "node main.js"
end

desc "Run and use the parser generated from grammar.pegjs"
task :run => :compile do
  sh "node mainfromfile.js input1"
end

desc "clean derived files"
task :clean do
  sh "rm grammar.js"
end


