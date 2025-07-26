#!/bin/bash

# Auto-generate version based on current date and build number
# Format: DD-MM-YYYY-VV
# Description comes from latest commit message

# Get current date
CURRENT_DATE=$(date +"%d-%m-%Y")

# Get latest commit message for description
COMMIT_MESSAGE=$(git log -1 --pretty=format:"%s")

# Check if version.json exists
if [ ! -f "version.json" ]; then
    echo "version.json not found, creating with initial version"
    echo '{
  "version": "'$CURRENT_DATE'-01",
  "description": "'$COMMIT_MESSAGE'"
}' > version.json
    exit 0
fi

# Read current version from version.json
CURRENT_VERSION=$(grep '"version"' version.json | sed 's/.*"version": "\([^"]*\)".*/\1/')

# Extract date part from current version (first 10 characters: DD-MM-YYYY)
VERSION_DATE=${CURRENT_VERSION:0:10}

# Check if we're building on the same date
if [ "$VERSION_DATE" = "$CURRENT_DATE" ]; then
    # Same date, increment build number
    BUILD_NUM=${CURRENT_VERSION:11}  # Get everything after DD-MM-YYYY-
    BUILD_NUM=$((BUILD_NUM + 1))
    NEW_BUILD_NUM=$(printf "%02d" $BUILD_NUM)
    NEW_VERSION="$CURRENT_DATE-$NEW_BUILD_NUM"
else
    # New date, reset to 01
    NEW_VERSION="$CURRENT_DATE-01"
fi

echo "Updating version from $CURRENT_VERSION to $NEW_VERSION"
echo "Using commit message: $COMMIT_MESSAGE"

# Update version.json with new version and commit message
cat > version.json << EOF
{
	"version": "$NEW_VERSION",
	"description": "$COMMIT_MESSAGE"
}
EOF

echo "Version updated to: $NEW_VERSION"
