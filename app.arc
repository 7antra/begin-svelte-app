@app
begin-app

@static

@http
get /api
post /api

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
