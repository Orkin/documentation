/*! For license information please see 50bab564.e3e6ca6b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var i=n(1),r=n(9),a=(n(0),n(428)),o=n(437),l=n(427),c=n(432),s={last_modified_on:"2022-02-02",$schema:"/.meta/.schemas/guides.json",title:"Deploy Rails with PostgreSQL and Sidekiq",description:"How to deploy a Rails application with the PostgreSQL database and Sidekiq workers",author_github:"https://github.com/l0ck3",tags:["type: tutorial","framework: rails","language: ruby","database: postgresql"],hide_pagination:!0},p={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Deploy Rails with PostgreSQL and Sidekiq",description:"How to deploy a Rails application with the PostgreSQL database and Sidekiq workers",permalink:"/guides/tutorial/deploy-rails-with-postgresql-and-sidekiq",readingTime:"11 min read",source:"@site/guides/tutorial/deploy-rails-with-postgresql-and-sidekiq.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: rails",permalink:"/guides/tags/framework-rails"},{label:"language: ruby",permalink:"/guides/tags/language-ruby"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"Deploy Rails with PostgreSQL and Sidekiq",truncated:!1,prevItem:{title:"Deploy Rails with PostgreSQL",permalink:"/guides/tutorial/deploy-rails-with-postgresql"},nextItem:{title:"Deploy Spring Boot with PostgreSQL",permalink:"/guides/tutorial/deploy-spring-boot-with-postgresql"}},b=[{value:"Goal",id:"goal",children:[]},{value:"Prepare your Rails application",id:"prepare-your-rails-application",children:[]},{value:"Deploy your application to Qovery",id:"deploy-your-application-to-qovery",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.a,{name:"guide",mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have a Qovery cluster ready"))),Object(a.b)("h2",{id:"goal"},"Goal"),Object(a.b)("p",null,"In this tutorial we will deploy a typical Rails 6 application, using PostgreSQL as a database and Sidekiq as an ActiveJob backend for background tasks."),Object(a.b)("h2",{id:"prepare-your-rails-application"},"Prepare your Rails application"),Object(a.b)(l.a,{type:"notice",mdxType:"Alert"},"If you don't have a Rails 6 application at hand, you can clone this demo app: https://github.com/Qovery/qovery-rails-full-application-example"),Object(a.b)(l.a,{type:"warning",mdxType:"Alert"},"Qovery doesn't support Procfiles with multiple processes yet. We'll have to use Dockerfiles for both the web application and Sidekiq workers.",Object(a.b)("br",null),"Qovery doesn't support overriding Docker command yet, so we'll use two different Dockerfiles."),Object(a.b)(o.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("h4",{id:"web-application-dockerfile"},"Web application Dockerfile"),Object(a.b)("p",null,"Add a ",Object(a.b)("inlineCode",{parentName:"p"},"Dockerfile")," file at the root of your application with the following content: "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Dockerfile"}),'FROM ruby:3.0.2-alpine3.13 AS builder\n\n# Minimal requirements to run a Rails app\nRUN apk add --no-cache --update build-base \\\n  linux-headers \\\n  git \\\n  postgresql-dev=~13 \\\n  # Rails SQL schema format requires `pg_dump(1)` and `psql(1)`\n  postgresql=~13 \\\n  # Install same version of pg_dump\n  postgresql-client=~13 \\\n  nodejs \\\n  yarn \\\n  # Needed for nodejs / node-gyp\n  python2 \\\n  tzdata\n\n  \nENV BUNDLER_VERSION 2.2.24\nENV BUNDLE_JOBS 8\nENV BUNDLE_RETRY 5\nENV BUNDLE_WITHOUT development:test\nENV BUNDLE_CACHE_ALL true\nENV RAILS_ENV production\nENV RACK_ENV production\nENV NODE_ENV production\nENV APP_PATH /work\n\nWORKDIR $APP_PATH\n\n# Gems installation\nCOPY Gemfile Gemfile.lock ./\nRUN gem install bundler -v $BUNDLER_VERSION\n\nRUN bundle config --global frozen 1 && \\\n  bundle install && \\\n  rm -rf /usr/local/bundle/cache/*.gem && \\\n  find /usr/local/bundle/gems/ -name "*.c" -delete && \\\n  find /usr/local/bundle/gems/ -name "*.o" -delete\n\n  \n\n# NPM packages installation\nCOPY package.json yarn.lock ./\nRUN yarn install --frozen-lockfile --non-interactive --production\n\nADD . $APP_PATH\n\nRUN SECRET_KEY_BASE=`bin/rake secret` rails assets:precompile --trace && \\\n  yarn cache clean && \\\n  rm -rf node_modules tmp/cache vendor/assets test\n\n  \nFROM ruby:3.0.2-alpine3.13\n\nRUN mkdir -p /work\nWORKDIR /work\n\nENV RAILS_ENV production\nENV NODE_ENV production\nENV RAILS_SERVE_STATIC_FILES true\n\n# Some native extensions required by gems such as pg or mysql2.\nCOPY --from=builder /usr/lib /usr/lib\n\n# Timezone data is required at runtime\nCOPY --from=builder /usr/share/zoneinfo/ /usr/share/zoneinfo/\n\n# Ruby gems\nCOPY --from=builder /usr/local/bundle /usr/local/bundle\nCOPY --from=builder /work /work\n\nCOPY docker-entrypoint.sh ./\nENTRYPOINT ["./docker-entrypoint.sh"]\n\nEXPOSE 3000\n\nCMD ["rails", "server", "-p", "3000", "-b", "0.0.0.0"]\n')),Object(a.b)(l.a,{type:"notice",mdxType:"Alert"},"You can tweak the versions if you are using a different version of Ruby, Bundler, PostgreSQL ...")),Object(a.b)("li",null,Object(a.b)("h4",{id:"sidekiq-dockerfile"},"Sidekiq Dockerfile"),Object(a.b)("p",null,"We'll use a similar Dockerfile for our Sidekiq worker.\nCreate a ",Object(a.b)("inlineCode",{parentName:"p"},"Dockerfile.sidekiq")," at the root of your repository with the following content: "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-Dockerfile"}),'FROM ruby:3.0.2-alpine3.13 AS builder\n\nLABEL maintener=\'yirbah@qovery.com\'\n\n# Minimal requirements to run a Rails app\nRUN apk add --no-cache --update build-base \\\n  linux-headers \\\n  git \\\n  postgresql-dev=~13 \\\n  # Rails SQL schema format requires `pg_dump(1)` and `psql(1)`\n  postgresql=~13 \\\n  # Install same version of pg_dump\n  postgresql-client=~13 \\\n  nodejs \\\n  yarn \\\n  # Needed for nodejs / node-gyp\n  python2 \\\n  tzdata\n\nENV BUNDLER_VERSION 2.2.24\nENV BUNDLE_JOBS 8\nENV BUNDLE_RETRY 5\nENV BUNDLE_WITHOUT development:test\nENV BUNDLE_CACHE_ALL true\nENV RAILS_ENV production\nENV RACK_ENV production\nENV NODE_ENV production\nENV APP_PATH /work\n\nWORKDIR $APP_PATH\n\n# Gems installation\nCOPY Gemfile Gemfile.lock ./\n\nRUN gem install bundler -v $BUNDLER_VERSION\n\nRUN bundle config --global frozen 1 && \\\n  bundle install && \\\n  rm -rf /usr/local/bundle/cache/*.gem && \\\n  find /usr/local/bundle/gems/ -name "*.c" -delete && \\\n  find /usr/local/bundle/gems/ -name "*.o" -delete\n\n# NPM packages installation\nCOPY package.json yarn.lock ./\n\nRUN yarn install --frozen-lockfile --non-interactive --production\n\nADD . $APP_PATH\n\nRUN SECRET_KEY_BASE=`bin/rake secret` rails assets:precompile --trace && \\\n  yarn cache clean && \\\n  rm -rf node_modules tmp/cache vendor/assets test\n\nFROM ruby:3.0.2-alpine3.13\n\nRUN mkdir -p /work\nWORKDIR /work\n\nENV RAILS_ENV production\nENV NODE_ENV production\nENV RAILS_SERVE_STATIC_FILES true\n\n# Some native extensions required by gems such as pg or mysql2.\nCOPY --from=builder /usr/lib /usr/lib\n\n# Timezone data is required at runtime\nCOPY --from=builder /usr/share/zoneinfo/ /usr/share/zoneinfo/\n\n# Ruby gems\nCOPY --from=builder /usr/local/bundle /usr/local/bundle\n\nCOPY --from=builder /work /work\n\nCOPY docker-entrypoint.sh ./\n\n\nCMD ["bundle", "exec", "sidekiq"]\n'))),Object(a.b)("li",null,Object(a.b)("h4",{id:"dockerignore"},"Dockerignore"),Object(a.b)("p",null,"In order to avoid unneeded files being copied to your Docker image, you can add a ",Object(a.b)("inlineCode",{parentName:"p"},".dockerignore")," file to the root of your project, with the following content: "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"# See https://help.github.com/articles/ignoring-files for more about ignoring files.\n#\n# If you find yourself ignoring temporary files generated by your text editor\n# or operating system, you probably want to add a global ignore instead:\n# git config --global core.excludesfile '~/.gitignore_global'\n\n# Ignore bundler config.\n/.bundle\n\n# Ignore all logfiles and tempfiles.\n/log/*\n/tmp/*\n!/log/.keep\n!/tmp/.keep\n\n# Ignore pidfiles, but keep the directory.\n/tmp/pids/*\n!/tmp/pids/\n!/tmp/pids/.keep\n\n# Ignore uploaded files in development.\n/storage/*\n!/storage/.keep\n/public/assets\n.byebug_history\n\n# Ignore master key for decrypting credentials and more.\n/config/master.key\n/public/packs\n/public/packs-test\n/node_modules\n/yarn-error.log\nyarn-debug.log*\n.yarn-integrity\n")),Object(a.b)(l.a,{type:"notice",mdxType:"Alert"},"You can customize this file for the needs of your project. Add any file that is not useful for the runtime of your application.")),Object(a.b)("li",null,Object(a.b)("h4",{id:"docker-entrypoint"},"Docker entrypoint"),Object(a.b)("p",null,"Finally we will add an entrypoint script that will be called at the start of the application.\nWe'll use it to run the database setup and migration commands."),Object(a.b)("p",null,"You can read more about why this entrypoint is needed ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/guides/tutorial/how-to-run-commands-at-application-startup/"}),"here"),". "),Object(a.b)(l.a,{type:"notice",mdxType:"Alert"},"Soon Qovery will add lifecycle hooks and this won't be needed anymore"),Object(a.b)("p",null,"Add a ",Object(a.b)("inlineCode",{parentName:"p"},"docker-entrypoint.sh")," file at the root of your project with the following content: "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'#! /bin/sh\n\nbundle exec rake db:migrate\n\nif [[ $? != 0 ]]; then\n\necho\necho "== Failed to migrate. Running setup first."\necho\n\nbundle exec rake db:setup\nfi\n\n# Execute the given or default command:\n\nexec "$@"\n')),Object(a.b)("p",null,"Make this script executable: "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"chmod +x docker-entrypoint.sh\n"))))),Object(a.b)("h2",{id:"deploy-your-application-to-qovery"},"Deploy your application to Qovery"),Object(a.b)(o.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("h4",{id:"create-a-project"},"Create a project"),Object(a.b)("p",null,"Now that your Rails application is ready to be dockerized, we can create a project on the Qovery console:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/01.png",alt:"Qovery console"}))),Object(a.b)("li",null,Object(a.b)("h4",{id:"create-an-environment"},"Create an environment"),Object(a.b)("p",null,"Now we'll create an environment. Let's start with our ",Object(a.b)("inlineCode",{parentName:"p"},"staging")," environment:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/02.png",alt:"Qovery console"})),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/03.png",alt:"Qovery console"}))),Object(a.b)("li",null,Object(a.b)("h4",{id:"add-your-rails-app"},"Add your Rails app"),Object(a.b)("p",null,"We'll now add our Rails app to the environment: "),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/04.png",alt:"Qovery console"})),Object(a.b)("p",null,"On the form you'll need to enter the following information:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The app name: it can be whatever you want. Here ",Object(a.b)("inlineCode",{parentName:"li"},"web"),"."),Object(a.b)("li",{parentName:"ul"},"Pick your Git privider, then the repository for your application"),Object(a.b)("li",{parentName:"ul"},"The branch you want to deploy for this application. We chose ",Object(a.b)("inlineCode",{parentName:"li"},"main")),Object(a.b)("li",{parentName:"ul"},"The Root application path. In case your application is not at the root of your repository (e.g. you have a monorepo), otherwise it will be ",Object(a.b)("inlineCode",{parentName:"li"},"/"),"."),Object(a.b)("li",{parentName:"ul"},"For the Build mode, pick ",Object(a.b)("inlineCode",{parentName:"li"},"Dockerfile"),"."),Object(a.b)("li",{parentName:"ul"},"Enter the path to your Dockerfile.")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/05.png",alt:"Qovery console"})),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/06.png",alt:"Qovery console"})),Object(a.b)("p",null,"You can then click ",Object(a.b)("inlineCode",{parentName:"p"},"Create"),". You'll be redirected to your application dashboard."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/07.png",alt:"Qovery console"})),Object(a.b)(l.a,{type:"notice",mdxType:"Alert"},"Your application is not being deployed yet. We'll add the database and do some more configuration before.")),Object(a.b)("li",null,Object(a.b)("h4",{id:"add-a-postgresql-database"},"Add a PostgreSQL database"),Object(a.b)("p",null,"Our application will use a PostgreSQL database. Let's add one to our environment:"),Object(a.b)("p",null,"Click on ",Object(a.b)("inlineCode",{parentName:"p"},"ADD"),", then ",Object(a.b)("inlineCode",{parentName:"p"},"Database")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/08.png",alt:"Qovery console"})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Give a name to your database."),Object(a.b)("li",{parentName:"ul"},"For the Type, select ",Object(a.b)("inlineCode",{parentName:"li"},"POSTGRESQL"),"."),Object(a.b)("li",{parentName:"ul"},"For the Mode, we'll pick ",Object(a.b)("inlineCode",{parentName:"li"},"CONTAINER"),"."),Object(a.b)("li",{parentName:"ul"},"Chose the Version you need.")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/09.png",alt:"Qovery console"})),Object(a.b)(l.a,{type:"warning",mdxType:"Alert"},"Since we are creating a Staging environment, we used the CONTAINER mode. This is not recommended for Production. In Production environment you should go for the MANAGED option."),Object(a.b)("p",null,"You can then click ",Object(a.b)("inlineCode",{parentName:"p"},"Create"))),Object(a.b)("li",null,Object(a.b)("h4",{id:"add-a-redis-database"},"Add a Redis database"),Object(a.b)("p",null,"Since we're using Sidekiq, we'll also need a Redis database as a backend."),Object(a.b)("p",null,"If you didn't close the ",Object(a.b)("inlineCode",{parentName:"p"},"Database")," modal, you can click the ",Object(a.b)("inlineCode",{parentName:"p"},"ADD")," button, then in the dropbox for ",Object(a.b)("inlineCode",{parentName:"p"},"Database 2")," click ",Object(a.b)("inlineCode",{parentName:"p"},"Create database"),"."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/10.png",alt:"Qovery console"})),Object(a.b)("p",null,"Fill the form the same way you did for PostgreSQL:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/11.png",alt:"Qovery console"})),Object(a.b)(l.a,{type:"warning",mdxType:"Alert"},"Since we are creating a Staging environment, we used the CONTAINER mode. This is not recommended for Production. In Production environment you should go for the MANAGED option."),Object(a.b)("p",null,"Click ",Object(a.b)("inlineCode",{parentName:"p"},"Create")," and close the Databases modal."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/12.png",alt:"Qovery console"}))),Object(a.b)("li",null,Object(a.b)("h4",{id:"configure-your-application-env-variables"},"Configure your application ENV variables"),Object(a.b)("p",null,"Go back to your environment view:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/13.png",alt:"Qovery console"})),Object(a.b)("p",null,"Then click on your application:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/14.png",alt:"Qovery console"})),Object(a.b)("p",null,"On your application dashboard, go to ",Object(a.b)("inlineCode",{parentName:"p"},"Environment variables"),":"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/15.png",alt:"Qovery console"})),Object(a.b)("p",null,"Here you can add any environment variable your application needs."),Object(a.b)(l.a,{type:"warning",mdxType:"Alert"},"Since we are creating a Staging environment, we used the CONTAIWe do not advise you to add secret values here. For sensitive information, like credentials, use the Secret variables, which are encrypted."),Object(a.b)("p",null,"We'll now configure a few secrets for our application. Click on the ",Object(a.b)("inlineCode",{parentName:"p"},"Secret variables")," tab:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/16.png",alt:"Qovery console"})),Object(a.b)("p",null,"First since our Demo application uses the Rails Encrypted Secrets, we'll add the ",Object(a.b)("inlineCode",{parentName:"p"},"RAILS_MASTER_KEY")," secret\nClick on ",Object(a.b)("inlineCode",{parentName:"p"},"CREATE SECRET"),", then fill the form:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Variable: enter the variable name, ",Object(a.b)("inlineCode",{parentName:"li"},"RAILS_MASTER_KEY"),"."),Object(a.b)("li",{parentName:"ul"},"Value: enter the actual value for your ",Object(a.b)("inlineCode",{parentName:"li"},"RAILS_MASTER_KEY"),"."),Object(a.b)("li",{parentName:"ul"},"Scope: chose ",Object(a.b)("inlineCode",{parentName:"li"},"ENVIRONMENT")," since the secret will be used by our Sidekiq worker too.")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/17.png",alt:"Qovery console"})),Object(a.b)("p",null,"Now we'll need to add the ",Object(a.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," and ",Object(a.b)("inlineCode",{parentName:"p"},"REDIS_URL"),", that Rails will use to connect to PostgreSQL and Redis. Those are secrets as well, since the URLs contain passwords."),Object(a.b)("p",null,"But instead of creating new secrets like we did for the ",Object(a.b)("inlineCode",{parentName:"p"},"RAILS_MASTER_KEY"),", we'll use aliases. Aliases are just a way of giving a different name to an existing ENV variable or secret.\nSince Qovery provides us with the secrets corresponding to the two databases we created earlier, we can alias them."),Object(a.b)("p",null,"First, create an alias to the ",Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_POSTGRESQL_ZXXXXXXXX_DATABASE_URL_INTERNAL"),":"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/18.png",alt:"Qovery console"})),Object(a.b)("p",null,"In the form, chose ",Object(a.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," for the alias name and set it at the ",Object(a.b)("inlineCode",{parentName:"p"},"ENVIRONMENT")," level:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/19.png",alt:"Qovery console"})),Object(a.b)("p",null,"Click ",Object(a.b)("inlineCode",{parentName:"p"},"Create")," then do the same thing with a ",Object(a.b)("inlineCode",{parentName:"p"},"REDIS_URL")," alias to the ",Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_REDIS_ZXXXXXXXX_DATABASE_URL_INTERNAL"),"."),Object(a.b)("p",null,"You should see your two aliases created:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/20.png",alt:"Qovery console"})),Object(a.b)(l.a,{type:"notice",mdxType:"Alert"},"These are the secrets required for our demo application. Yours might need more. Add all the variables you need before going to the next step.")),Object(a.b)("li",null,Object(a.b)("h4",{id:"deploy-the-environment"},"Deploy the environment"),Object(a.b)("p",null,"Go back to the ",Object(a.b)("inlineCode",{parentName:"p"},"staging")," environment view and deploy it:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/21.png",alt:"Qovery console"})),Object(a.b)("p",null,"You should see it switch to the ",Object(a.b)("inlineCode",{parentName:"p"},"DEPLOYING")," status. Wait until the status turns to ",Object(a.b)("inlineCode",{parentName:"p"},"RUNNING"),". "),Object(a.b)(l.a,{type:"notice",mdxType:"Alert"},"The first deployment could take a while."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/22.png",alt:"Qovery console"})),Object(a.b)("p",null,"Once your environment is ",Object(a.b)("inlineCode",{parentName:"p"},"RUNNING"),", open the ",Object(a.b)("inlineCode",{parentName:"p"},"web")," application to see if it works. It will open a new tab showing your application."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/23.png",alt:"Qovery console"}))),Object(a.b)("li",null,Object(a.b)("h4",{id:"add-the-sidekiq-worker"},"Add the Sidekiq worker"),Object(a.b)("p",null,"The last step is to add your Sidekiq Worker. We'll follow the same steps as in the ",Object(a.b)("inlineCode",{parentName:"p"},"Add your Rails app")," section with a few differences:"),Object(a.b)("p",null,"Add a new application:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/24.png",alt:"Qovery console"})),Object(a.b)("p",null,"The settigs are the same as for the Rails application, except:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"We use the ",Object(a.b)("inlineCode",{parentName:"li"},"Dockerfile.sidekiq")," Dockerfile this time"),Object(a.b)("li",{parentName:"ul"},"We don't declare a port since our worker is not a web service but communicates with our application through Redis.")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/25.png",alt:"Qovery console"})),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/26.png",alt:"Qovery console"})),Object(a.b)("p",null,"Click ",Object(a.b)("inlineCode",{parentName:"p"},"Create"),"."),Object(a.b)("p",null,"If we check the ENV variables and secrets, we notice that it directly inherited the ones we set at the ",Object(a.b)("inlineCode",{parentName:"p"},"Environment")," level. So we don't need to do the configuration again."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/27.png",alt:"Qovery console"})),Object(a.b)("p",null,"You can now deploy your ",Object(a.b)("inlineCode",{parentName:"p"},"worker")," application:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deploy-rails-with-postgresql-and-sidekiq/28.png",alt:"Qovery console"})),Object(a.b)("p",null,"Wait for it to switch to the ",Object(a.b)("inlineCode",{parentName:"p"},"RUNNING")," status.")))),Object(a.b)("h2",{id:"conclusion"},"Conclusion"),Object(a.b)("p",null,"You now have a Rails application with PostgreSQL and Sidekiq running on Qovery. "),Object(a.b)(l.a,{type:"warning",mdxType:"Alert"},"Depending on the gems you are using, their versions or your application configuration, you might need to tweak the Dockerfiles provided.",Object(a.b)("br",null),"This example is meant to be a starting point for your own configuration, not a one-size-fits-all configuration."))}u.isMDXComponent=!0},426:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)&&i.length){var o=r.apply(null,i);o&&e.push(o)}else if("object"===a)for(var l in i)n.call(i,l)&&i[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},427:function(e,t,n){"use strict";n(431);var i=n(0),r=n.n(i),a=n(426),o=n.n(a);n(131);t.a=function(e){var t=e.children,n=e.classNames,i=e.fill,a=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:o()(n,"alert","alert--"+l,{"alert--fill":i,"alert--icon":!1!==a}),role:"alert"},!1!==a&&r.a.createElement("i",{className:o()("feather","icon-"+(a||c))}),t)}},428:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=i,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||a;return n?r.a.createElement(m,l({ref:t},s,{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},430:function(e,t,n){var i=n(25).f,r=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in r||n(10)&&i(r,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},431:function(e,t,n){var i=n(12);i(i.P,"Array",{fill:n(435)}),n(74)("fill")},432:function(e,t,n){"use strict";n(430);var i=n(0),r=n.n(i),a=n(427);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},435:function(e,t,n){"use strict";var i=n(27),r=n(75),a=n(26);e.exports=function(e){for(var t=i(this),n=a(t.length),o=arguments.length,l=r(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,s=void 0===c?n:r(c,n);s>l;)t[l++]=e;return t}},436:function(e,t,n){"use strict";var i=n(438),r=n(51);function a(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,i){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===i[e]&&(i[e]={}),i[e][t[1]]=n):i[e]=n};case"bracket":return function(e,n,i){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==i[e]?i[e]=[].concat(i[e],n):i[e]=[n]:i[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),i=Object.create(null);return"string"!=typeof e?i:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(r),a,i)})),Object.keys(i).sort().reduce((function(e,t){var n=i[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):i},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,i){return null===n?[a(t,e),"[",i,"]"].join(""):[a(t,e),"[",a(i,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(i){var r=e[i];if(void 0===r)return"";if(null===r)return a(i,t);if(Array.isArray(r)){var o=[];return r.slice().forEach((function(e){void 0!==e&&o.push(n(i,e,o.length))})),o.join("&")}return a(i,t)+"="+a(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},437:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=(n(426),n(436)),o=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+o.a.stringify(c),p=Object(i.useState)(null),b=p[0],d=p[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!b&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},438:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);