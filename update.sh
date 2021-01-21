#!/bin/sh

VERSION=$(jq -r .version package.json);

AUTHOR=$(jq -r .author package.json);

LICENSE=$(jq -r .license package.json);

REPOSITORY=$(jq -r .repository.url package.json);

HOMEPAGE=$(jq -r .homepage package.json);

escape_slashes() {
    sed 's/\//\\\//g'
}

change_line() {
    OLD_LINE_PATTERN=$1; shift
    NEW_LINE=$1; shift
    FILE=$1

    NEW=$(echo "${NEW_LINE}" | escape_slashes)
    sed -i '/'"${OLD_LINE_PATTERN}"'/s/.*/'"${NEW}"'/' "${FILE}"
}


change_line 'private readonly _version: string = '  "	private readonly _version: string = \"${VERSION}\"" ./src/class/info.ts

change_line 'private readonly _author: string = '  "	private readonly _author: string = \"${AUTHOR}\"" ./src/class/info.ts

change_line 'private readonly _license: string = '  "	private readonly _license: string = \"${LICENSE}\"" ./src/class/info.ts

change_line 'private readonly _repository: string = '  "	private readonly _repository: string = \"${REPOSITORY}\"" ./src/class/info.ts

change_line 'private readonly _homepage: string = '  "	private readonly _homepage: string = \"${HOMEPAGE}\"" ./src/class/info.ts
