

#---------------------------------------
#---------------------------------------
#   SEARCHING
#---------------------------------------
#---------------------------------------


# URI searching
GET /products/_search?q=name:sauvignon AND tags:wine

# Query DSL
GET /products/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "name": "sauvignon"
          }
        },
        {
          "match": {
            "tags": "wine"
          }
        }
      ]
    }
  }
}

# match all Query basically returns ALL documents
GET /products/_search
{
  "query": {
    "match_all": {
      
    }
  }
}

GET /products/_mapping

# Term level query
GET /products/_search
{
  "query":{
    "term":{
      "tags.keyword":"Vegetable"
    }
  }
}

GET /products/_search
{
  "query":{
    "term":{
      "is_active":true
    }
  }
}

GET /products/_search
{
  "query":{
    "term":{
      "in_stock":1
    }
  }
}

# term query matching on multiple values
# will match 'Soup' OR 'Meat'
GET /products/_search
{
  "query":{
    "terms":{
      "tags.keyword":["Soup","Meat"]
    }
  }
}


# Get documents by IDs
GET /products/_search
{
  "query":{
    "ids": {
      "values":["100","200","300"]
    }
  }
}




#---------------------------------------
#   Range Searches
#---------------------------------------

