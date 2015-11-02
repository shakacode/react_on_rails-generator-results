# Runs react_on_rails generators on master with varying options and puts each result in its own branch.
# You must pass in a version number so that the branches will be unique. For example:
#   rake all[10] will generate all results with a "-10" suffix on the branches.

RESULT_TYPES = %w(basic basic-server-rendering redux redux-server-rendering)

# Define tasks to generate each result type app
RESULT_TYPES.each do |result_type|
  desc "generate #{result_type} app"
  task result_type, [:version] do |_task, args|
    sh %( git checkout master )
    sh %( git checkout -b #{result_type}-#{args[:version]} )
    sh %( cd tester_app && bundle install )
    sh %( cd tester_app && rails generate react_on_rails:install )
    sh %( cd tester_app && bundle install )
    sh %( cd tester_app/client && npm install )
    sh %( git add . )
    sh %( git commit -m "#{result_type.capitalize} App Generated v#{args[:version]}" )
  end
end

desc "generates all results and places them in their own branch"
task :all, [:version] do |_task, args|
  RESULT_TYPES.each do |result_type|
    Rake::Task[result_type].invoke(args[:version])
  end
end

desc "push all branches"
task "push_all", [:version] do |_task, args|
  RESULT_TYPES.each do |result_type|
    branch_name = "#{result_type}-#{args[:version]}"
    sh %( git checkout #{branch_name} )
    sh %( git push origin #{branch_name} -u )
  end
end

# Requires `hub` command-line tool
desc "creates pull requests"
task "pull_requests" do |_task, args|
  RESULT_TYPES.each do |result_type|
    branch_name = "#{result_type}-#{args[:version]}"
    sh %( git checkout #{branch_name} )
    sh %( hub pull-request #{branch_name} )
  end
end
