FROM alpine/git as clone
WORKDIR /app
RUN git clone https://github.com/priximmo/war-hello-maven.git

FROM maven:3.5-jdk-8-alpine as build
WORKDIR /app
COPY --from=clone /app/war-hello-maven /app
RUN mvn package

FROM tomcat
COPY --from=build /app/target/hello-world-war-1.0.0.war /usr/local/tomcat/webapps/ROOT.war
COPY --from=build /app/target/hello-world-war-1.0.0/ /usr/local/tomcat/webapps/ROOT
EXPOSE 8080
