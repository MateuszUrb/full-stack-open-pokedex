* For Ruby, I choose "RoboCop" for linting/formatting, why?, because it seems to be the industry standard for linting, and I comes with a lot of features. (works in every major Ruby implementation).
For testing we have we could use Minitest, a built-in testing framework, and capybara(simulating a user in web apps), so use Minitest for small apps, and capybara for more web-based applications.

If it comes to the build step, Ruby is an interpreted language, so it does not require a traditional build tool like those used for compiled languages it is run directly using Ruby command.

When I choose tools, I try to use lightweight ones, preferably built-in, to avoid as many dependencies as possible.

* Alternative for setting up CI? After GitHub, I can think of Gitlab, which uses .yml files for stages, jobs, and scripts.
As of writing this in 2025, I found "drone.io" self-service for CI, it supports any platform, works with any language, and any source code manager, it uses clud native pipeline engine.

* Choosing between a self-hosting and cloud-based env can depend on several factors. If we choose self-hosting, we have better control, data stays on our network, we can tweak things as we like, the cost of maintenance can be lower than cloud one,
There are also limits like maintenance, maintenance.
If we choose cloud-based
We have easily scalable resources up/down based on demand,
cost pay how much you use/ pay a lot if we use a lot of resources.

to choose which to pick, I would need our budget, the scale of our app, we can even self-host? team size, expertise, do we have people that did self-hosting or cloude-hosting one.
