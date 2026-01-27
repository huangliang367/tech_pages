#!/bin/bash

set -e

PLANTUML_JAR=tools/plantuml.jar
SRC=docs/diagrams

echo "==============================="
echo "Generating plantuml svg..."

java -jar $PLANTUML_JAR \
  -tsvg \
  -charset UTF-8 \
  -o ../public/plantuml \
  $SRC
echo "==============================="