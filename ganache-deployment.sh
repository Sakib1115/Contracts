#!/usr/bin/env sh

set -x #echo on

# make sure you have .env files 
source .env
export PRIVATE_KEY=$PRIVATE_KEY
export MNEMONIC=$MNEMONIC

# export bor id
export BOR_ID="${BOR_ID:-1370}"
# export heimdall id
export HEIMDALL_ID="${HEIMDALL_ID:-heimdall-$BOR_ID}"

# root contracts are deployed on base chain
bun run truffle:migrate:dev -- --reset --to 4
sleep 3