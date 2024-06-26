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
> cURL -XPUT  http://localhost:9200/products/_bulk  -H "Content-Type: application/x-ndjson" --data-binary "@products-bulk.json"
```

a test?
https://www.instaclustr.com/support/documentation/elasticsearch/using-elasticsearch/connecting-to-elasticsearch-using-curl/
