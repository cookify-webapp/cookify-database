FROM mongo

ENV MONGO_INITDB_ROOT_USERNAME cookifyuser
ENV MONGO_INITDB_ROOT_PASSWORD cookifydefaultpassword
ENV MONGO_INITDB_DATABASE cookify

EXPOSE 27017
