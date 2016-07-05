dmk-springboot-web
=========

test rig for springboot, REST sevice, embedded tomcat w/ tls, swagger doc, reactjs

http://projects.spring.io/spring-boot/
https://facebook.github.io/react/

Initial setup
---
cd src/main/resources/static
bower install babel
bower install react
bower install requirejs
bower install requirejs-babel
bower install requirejs-react-jsx
bower install requirejs-text
bower install rest

Compile
---
mvn clean install

Run spring boot embedded Tomcat
---
mvn spring-boot:run (hot deploys updates for js, nice!)
or
mvn clean install && java -jar target/jarname.jar

visit, https://localhost:8443/swagger-ui.html, see rest service docs
visit, https://localhost:8443/, see simple react page

Incantation
---
See, @SpringBootApplication
	"You're a wizard, Harry" 
					-- Hagrid
