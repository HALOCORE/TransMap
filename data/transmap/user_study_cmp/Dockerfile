FROM codercom/code-server:4.13.0-ubuntu

USER root
RUN DEBIAN_FRONTEND=noninteractive apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y net-tools iputils-ping htop \
  python3 python3-dev python3-pip expect curl build-essential

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 16.15.1

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN mkdir -p /usr/local/nvm
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install nvm with node and npm
RUN curl -sL https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash \
  && . $NVM_DIR/nvm.sh \ 
  && nvm install $NODE_VERSION && nvm alias default $NODE_VERSION && nvm use default \
  && npm install -g nodemon

RUN node -v
RUN npm -v

RUN DEBIAN_FRONTEND=noninteractive apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
  ranger wget ncdu

ENV ENTRYPOINTD=/entrypoint.d
USER 1000
ENV USER=coder
WORKDIR /home/coder
# ENTRYPOINT ["/usr/bin/entrypoint.sh" "--bind-addr" "0.0.0.0:8080" "."]