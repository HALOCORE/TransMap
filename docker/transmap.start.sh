echo "GITSTATUS" > $PWD/__gitstatus
git rev-parse HEAD >> $PWD/__gitstatus
git status | grep "working tree clean" >> $PWD/__gitstatus

RESTART_CONT=$1
if [ -z "$1" ]; then
  if [[ -z "${WORKSPACEROOT}" ]]; then
    docker compose -f transmap.docker-compose.yml up
  else
    PWD=$WORKSPACEROOT/docker docker compose -f transmap.docker-compose.yml up
  fi
else
  if [[ -z "${WORKSPACEROOT}" ]]; then
    docker compose -f transmap.docker-compose.yml restart $RESTART_CONT
  else
    PWD=$WORKSPACEROOT/docker docker compose -f transmap.docker-compose.yml restart $RESTART_CONT
  fi
fi