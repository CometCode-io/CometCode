---
layout: post
title: 'What is GraphQL?'
author: [Caelin]
tags: ['GraphQL', 'Server Technology']
date: '2020-05-28'
excerpt: GraphQL is one of the most modern ways to build and query API's using a declarative syntax, versus using endpoints like REST. 
---

  
GraphQL is a **syntax that describes how to ask for data**, and is generally used to load data from a server to a client. GraphQL has three main features:

1. It lets the client specify exactly what data is needed
2. It makes it easier to combine data from multiple sources
3. It uses a typed system to describe data

With GraphQL, the user can make a single call to fetch the required information by declaring what it needs, rather than several REST requests to fetch the same data.

# So what is GraphQL?
**What GraphQL is**
GraphQL is a query language for API's that uses a declarative syntax to describe what data is being requested and a server-side runtime for executing queries via a defined type system. It can be integrated into many existing stacks, with API's for a variety of languages. 

**What GraphQL isn't**
1. A backend
2. Database
3. Server structure
4. Storage Engine

This is what an example GraphQL query looks like:
```
{
	allUsers {
		id
		name
		address {
			zipcode
			streetname
		}
	}
}
```

This would get back the data:

```
{
	"data" {
		"allUsers": [
			{
				"url": "https://example.com"
				"name": "Bob"
				"address": {
					"zipcode": 92939
					"streetname": "Miranda"
				}
			},
			{
				"url": "https://example.com"
				"name": "Timmy"
				"address": {
					"zipcode": 93934
					"streetname": "Elk Road"
				}
			},
		]
	}
}
```

**Data shape driven**
The first thing you'll see is that the GraphQL query string defines a data structure, and the response mirrors that structure. This makes it easy to predict the shape of the data returned from the query, and specify on the client exactly what is needed. This also makes GraphQL extremely easy to learn and use.

**Hierarchical**
GraphQL is hierarchical by nature. It has built in relationships between objects, rather than a complex join statement in SQL or multiple round trip requests with REST. This naturally pairs well with user interfaces, allowing the developer to write less code for the same effect.  

**Strongly typed**
Each level of the query corresponds to a particular type, and each type describes a set of available fields. This means GraphQL will provide error messages if you ask for data that doesn't exist in the type.

**Protocol, not storage**
As mentioned above, each GraphQL field is backed by a function on the server. This means you can integrate it with any backend system or storage system, and use pre-existing code. 

**Introspective**
A GraphQL server can be queried for its supported types. This means that powerful tools like [GraphiQL](https://github.com/graphql/graphiql) have popped up to query API's with autocomplete. This means no more grepping code bases, or exploring endpoints with various CURL requests. 

**Version free**
Because the shape of the data is defined by the client, more fields can always be added while leaving existing clients unaffected. This means it's easy to always have backwards compatibility, and eliminated the need for incrementing version numbers of endpoints. 

> Crossposted from [Comet Code](https://cometcode.io), tutorials and articles for the modern developer
