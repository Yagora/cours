#!/bin/bash
### First argument is environment
DIRECTORY=$(cd `dirname $0` && pwd)
env=${1}
ips=$(aws ec2 describe-instances --region eu-west-3 --filter "Name=tag:Environment,Values=${env}" "Name=tag:,Values=" "Name=tag:,Values=" "Name=instance-state-name,Values=running" --query "Reservations[*].Instances[*].PrivateIpAddress" --output text | tr '\t' '\n')

SAVEIFS=$IFS   # Save current IFS
IFS=$'\n'      # Change IFS to new line
ips=($ips) # split to array $names
IFS=$SAVEIFS   # Restore IFS

for (( i=0; i<${#ips[@]}; i++ ))
do
    ip=${ips[$i]}
    echo "Write sshkey on ${ip} in ${env}"
    cat ${DIRECTORY}/../roles/ssh_keys/files/* | ssh -o "StrictHostKeyChecking no" nestor@${ip} 'dd of=.ssh/authorized_keys oflag=append conv=notrunc'
done
