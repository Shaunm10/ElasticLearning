# Elasting Learning

## Running via Docker Compose

Navigate to the docker directory.

> docker compose up -d

goto : 
[http://localhost:5601/](http://localhost:5601/)

### Login:

U: elastic

P: a123456

### Adding products-bulk.json

```
> cURL -XPOST  https://localhost:9200/products/_bulk  -H "Content-Type: application/x-ndjson" -u elastic:a123456 --insecure --data-binary "@products-bulk.json"
```
