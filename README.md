# react_on_rails Generator Results

You can find examples of running the generators from [react_on_rails](https://github.com/shakacode/react_on_rails/).

For each release, we'll be publishing a set of pull requests that show the various permutations of running the generator on top of a brand new Rails 4 App (`rails new my_app`).

Run `rails generate react_on_rails:install --help` for descriptions of all available options:

```
Usage:
  rails generate react_on_rails:install [options]

Options:
  -R, [--redux], [--no-redux]                          # Install Redux gems and Redux version of Hello World Example
  -S, [--server-rendering], [--no-server-rendering]    # Add necessary files and configurations for server-side rendering
  -j, [--skip-js-linters], [--no-skip-js-linters]      # Skip installing JavaScript linting files
  -L, [--ruby-linters], [--no-ruby-linters]            # Install ruby linting files, tasks, and configs
  -H, [--heroku-deployment], [--no-heroku-deployment]  # Install files necessary for deploying to Heroku

Runtime options:
  -f, [--force]                    # Overwrite files that already exist
  -p, [--pretend], [--no-pretend]  # Run but do not make any changes
  -q, [--quiet], [--no-quiet]      # Suppress status output
  -s, [--skip], [--no-skip]        # Skip files that already exist

Description:
    Create react on rails files for install generator.
```

See the [react_on_rails README.md](https://github.com/shakacode/react_on_rails/blob/master/README.md) for more information.

Note: We support [react-router](https://github.com/rackt/react-router/), even with server rendering, but we have not yet created generator options for that.

# Annotated PRs
These have commentary on why the generator does what it does:
* [redux](https://github.com/shakacode/react_on_rails-generator-results/pull/123): **LOTS OF TIPS HERE**

# v1.2 (not yet released) Diffs
* [v1.2 Pull Requests](https://github.com/shakacode/react_on_rails-generator-results/pulls)

# v1.1.1 Diffs
* [basic](https://github.com/shakacode/react_on_rails-generator-results/pull/121)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/122)
* [redux](https://github.com/shakacode/react_on_rails-generator-results/pull/123)
* [redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/124)
* [basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/125)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/126)
* [redux to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/127)
*	[basic to redux](https://github.com/shakacode/react_on_rails-generator-results/pull/129)
* [basic-server-rendering to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/128)
* [basic to basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/130)
