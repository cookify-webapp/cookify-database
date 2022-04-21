FROM mongo

ENV MONGO_INITDB_ROOT_USERNAME cookifyuser
ENV MONGO_INITDB_ROOT_PASSWORD cookifydefaultpassword
ENV MONGO_INITDB_DATABASE cookify

ADD ./init-script/init-script.js /docker-entrypoint-initdb.d
EXPOSE 27017
