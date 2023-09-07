#!/bin/bash
#
# $1: name (as appName)
# $2: displayName
# $3: app.json path
# $4: index.js path
#
# app: $0 app app . .
# app2: $0 app2 app2 . .

# app.json
echo '{' > $3/app.json
echo '  "name": "'$1'",' >> $3/app.json
echo '  "displayName": "'$2'"' >> $3/app.json
echo '}' >> $3/app.json

# index.js
echo "/**" > $4/index.js
echo " * @format" >> $4/index.js
echo " */" >> $4/index.js
echo "" >> $4/index.js
echo "import {AppRegistry} from 'react-native';" >> $4/index.js
echo "import {name as appName} from './app.json';" >> $4/index.js
echo "import {App} from './targets/"$1"/App';" >> $4/index.js
echo "" >> $4/index.js
echo "AppRegistry.registerComponent(appName, () => App);" >> $4/index.js

