#!/bin/bash

mkdir -p $1
cd $1
mkdir challenge/
mkdir solution/

touch ./challenge/description.txt
touch ./solution/flag.txt ./solution/description.txt
echo "$1 created!"