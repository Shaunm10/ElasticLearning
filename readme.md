# Elasting Learning

## Running via Docker Compose

Navigate to the docker directory.

> docker compose up -d

### Login:

U: elastic

P: a123456

### Adding products-bulk.json

```
> cURL -H "Content-Type: application/x-ndjson" -XPOST  http://localhost:9200/products/_bulk --data-binary "@products-bulk.json"
```
