# LoggerBot
bot that logs every message on a txt file!

made by [@xhyabunny](https://github.com/xhyabunny)

# requirements (npm)
```diff
+ discord.js (12.3.1/latest)
+ log4js
```

# issues

```diff
- embeded messages will give errors
# if you are having errors with non-existant references 
# then you might add these two lines of code at the top:
const { S_IFREG } = require('constants');
const { randomInt } = require('crypto');
```
