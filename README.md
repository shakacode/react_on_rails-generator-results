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
  -b, [--skip-bootstrap], [--no-skip-bootstrap]        # Skip installing files for bootstrap support

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
These have commentary on why the generator does what it does
* [redux v1.1.1](https://github.com/shakacode/react_on_rails-generator-results/pull/123)

# v2.0 Diffs
* [v2.0 Pull Requests](https://github.com/shakacode/react_on_rails-generator-results/pulls)
* [basic](https://github.com/shakacode/react_on_rails-generator-results/pull/187)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/188)
* [redux](https://github.com/shakacode/react_on_rails-generator-results/pull/189)
* [redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/190)
* [basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/191)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/192)
* [redux to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/193)
* [basic-server-rendering to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/194)
*	[basic to redux](https://github.com/shakacode/react_on_rails-generator-results/pull/195)
* [basic to basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/196)

Not yet done:
* [basic-skip-bootstrap](https://github.com/shakacode/react_on_rails-generator-results/pull/197)
* [basic to basic-skip-bootstrap](https://github.com/shakacode/react_on_rails-generator-results/pull/198)

# v1.2 Diffs
* [basic](https://github.com/shakacode/react_on_rails-generator-results/pull/144)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/145)
* [redux](https://github.com/shakacode/react_on_rails-generator-results/pull/146)
* [redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/147)
* [basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/148)
* [basic-skip-bootstrap](https://github.com/shakacode/react_on_rails-generator-results/pull/149)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/150)
* [redux to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/151)
* [basic-server-rendering to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/152)
*	[basic to redux](https://github.com/shakacode/react_on_rails-generator-results/pull/153)
* [basic to basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/154)
* [basic to basic-skip-bootstrap](https://github.com/shakacode/react_on_rails-generator-results/pull/155)

# v1.1.1 Diffs
* [basic](https://github.com/shakacode/react_on_rails-generator-results/pull/121)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/122)
* [redux](https://github.com/shakacode/react_on_rails-generator-results/pull/123): **ANNOTATED**
* [redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/124)
* [basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/125)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/126)
* [redux to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/127)
*	[basic to redux](https://github.com/shakacode/react_on_rails-generator-results/pull/129)
* [basic-server-rendering to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/128)
* [basic to basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/130)
