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

bun run template:process --bor-chain-id $BOR_ID
sleep 3