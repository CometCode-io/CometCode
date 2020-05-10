---
layout: post
title: 'Building a gRPC Server and Client in Dart'
author: [Caelin]
tags: ['gRPC', 'Flutter']
date: '2020-05-10'
excerpt: gRPC is a modern RPC framework for building APIs. Lets use the popular language Dart, used in Flutter, to create a gRPC client and server.
---

# Integrating Dart or Flutter with GRPC
gRPC is a modern, open source, and high performance RPC framework that is language agnostic, meaning it can work with a variety of platforms for a variety of use cases. gRPC stands for general-purpose Remote Procedure Calls, which is exactly what it does, provide an easy-to use framework to communicate across platforms or devices using HTTP2 as a transport. gRPC uses protocol buffers, Google's system to serialize structured data. This means that you define your data structures and data accessors in `.proto` files. 

# The Project
By the end of this article you'll have a basic todos api built in Dart using gRPC. The API will have three separate service calls, `createTodos` to create a todo item, `readTodos` to get all of the current todos, and `readTodosStream` which will return a stream, think like a socket, of todos which gets constantly updated . 

# GRPC with Flutter
If you're using gRPC for your Flutter application you're in luck, as gRPC has a supported library for Dart! That means you can make both client and server side code using the gRPC protocol and generate buffers in the Dart language. In this article we'll be building a server and client using gRPC in Dart, but will hold off on integrating with Flutter (though it should be pretty clear how to do so). 

# Building a gRPC Server in Dart
First thing you're going to want to do is install the Dart SDK. This is seperate from the Flutter SDK and can be installed by following [this guide](https://dart.dev/get-dart)). 

## Setup your Dart Workspace

Once you Dart installed, you'll want to create a basic Dart workspace.
```bash
mkdir dart-grpc-tutorial
cd dart-grpc-tutorial && mkdir lib
touch pubspec.yaml
touch lib/server.dart
```

Lets update that `pubspec.yaml` with the correct information:
```yaml pubspec.yaml
name: grpc_tutorial
version: 0.0.1
environment:
	sdk: ">=2.1.0 <3.0.0"
dependencies:
	grpc: 2.1.3
	protobuf: 1.0.1
```

and run `pub get` to install both dependencies.

Now remember what I said about protobuff files? We're going to make a custom protobuff file 
and compile it for Dart on our own! This proto file is going to hold the definitions for our API. 

## Installing the Proto Compiler
You'll have to install the proto compiler and the dart protocol buffer plugin to use gRPC. 

1.  If you haven't installed the compiler,  [download the package](https://developers.google.com/protocol-buffers/docs/downloads)  and follow the instructions in the README.
2.  Install the Dart Protocol Buffer plugin as described in  [its README](https://github.com/dart-lang/protobuf/tree/master/protoc_plugin#how-to-build-and-use). The executable  `bin/protoc-gen-dart`  must be in your  `PATH`  for the protocol buffer  `protoc`  to find it.

Now lets create a folder to hold our protobuff files and the generated dart code, and make our `todo.proto` file
```bash
mkdir protos && touch protos/todo.proto
mkdir lib/src && mkdir lib/src/generated
```

## Making your Proto File

Open up the `todo.proto` file and lets update it with our message type.

```protobuf todo.proto
syntax = "proto3";

package todoPackage;

service Todo {
	rpc createTodo(TodoItem) returns (TodoItem);
	rpc readTodos(voidNoParam) returns (TodoItems);
	rpc readTodosStream(voidNoParam) returns (stream TodoItem);
}

message voidNoParam {}

message TodoItem {
	int32 id = 1;
	string text = 2;
}

message TodoItems {
	repeated TodoItem items = 1;
}
```

Wow that was a lot of code. Lets go through line by line and see what this stuff does.

First we want to declare our proto syntax, which is proto3
```protobuf
syntax = "proto3";
```

Next, we declare our package
```protobuf
package todoPackage;
```

This is where it gets fun. We declare our actual TodoService here. You can think of the service like an API specification, it lays out the different "endpoints" of the API.
```protobuf
service Todo {
	rpc createTodo(TodoItem) returns (TodoItem); 					// Add a todo
	rpc readTodos(voidNoParam) returns (TodoItems);					// Get all todos
	rpc readTodosStream(voidNoParam) returns (stream TodoItem);		// Get all todos as a stream
}
```

You'll notice that we there are types here, lets break these down
```protobuf
rpc createTodo(TodoItem) returns (TodoItem)
```
The RPC in front declares it as a rpc endpoint. The name of the endpoint, createTodo is declared, as well as the input parameter, which is a `TodoItem`. `TodoItem` is declared as a message type on the bottom of this block of code, we'll go over it soon. Finally `returns (TodoItem)` tells us the return type of the function, which is a `TodoItem` as well. 

```protobuf
rpc readTodos(voidNoParam) returns (TodoItems);
```
This one is interesting because you'll see we pass in a type called `voidNoParam`. In gRPC, you can't have an empty parameter input, so we pass this in, which is just an empty object, to prevent errors.

```protobuf
rpc readTodosStream(voidNoParam) returns (stream TodoItem);
```

Finally, this one returns a stream of `TodoItems`. Coming from a Dart background, you should already know how a stream behaves, as a constantly updating set of information. 

The message types are then declared below. Notice that each parameter of each message type is declared with a type:
```protobuf
message TodoItem {
	int32 id = 1;
	string text = 2;
}
```
The number afterward tell gRPC what order to expect these parameters in. The `repeated` type that you see in the TodoItems just means an Array (or List) or TodoItems.

## Compile Your Proto File

Now we'll compile the proto file into usable Dart code by running
```bash
protoc -I protos/ protos/todo.proto --dart_out=grpc:lib/src/generated
```

If everything went correctly, you should see your generated folder fill up with some code files.

# Write A Simple Server

I've commented what each part of this code does, but essentially we're using the generated code from the proto file to create the TodoService. We create a class TodoServer to handle the creation and implementation of the gRPC server using TodoService. This is one of the advantages of having the proto files, they offer easily expandable abstract classes to implement the methods. 

```dart server.dart
import 'package:grpc/grpc.dart';  // Import GRPC
import 'package:grpc/src/server/call.dart';   // Import GRPC Server
import 'package:grpc_tutorial/src/generated/todo.pbgrpc.dart';  // Import the protofbuff files
  
class TodoService extends TodoServiceBase { 
	 TodoItems todos = new TodoItems(); // TodoItems is what's generated by Proto
  
	 /**
	 * Createa  new Todo
	 * @param call - meta information on the request
	 * @param request - information that's sent
	 * @returns todoItem - The item that was added
	 **/
	 @override  
	Future<TodoItem> createTodo(ServiceCall call, TodoItem request) async {
		// Create a new TodoObject with the data  
		TodoItem todoItem = new TodoItem();  
		todoItem.text = request.text;  
		todoItem.id = todos.$_getList(1).length +1;
		// Add a new todo Item to our list  
		todos.items.add(todoItem);  
		// Return a todoItem in accordance with function return typ[e
		return todoItem;  
	}  
	/**
	* Read the todos as a Future
	**/
	@override  
	Future<TodoItems> readTodos(ServiceCall call, voidNoParam request) async {  
		 return todos;  
	}  
 
	 /**
	 * Get all of the todos as a stream
	 **/
	@override  
	Stream<TodoItem> readTodosStream(ServiceCall call, voidNoParam request) async* {  
		// Iterate through all of the todos and 'yield' each todo (returns it to the stream)
		for (var todo in todos.items) {  
			yield todo;  
		}
	}
}  

/**
* gRPC Server
**/
class TodoServer {  
	Future<void> main(List<String> args) async {  
		final server = Server([TodoService()]);  // Create a new server from the TodoService
		await server.serve(port: 9000); // Start the server on port 9000
		print('Server listening on port ${server.port}...');  
 }}  
  
  
main() {  
  TodoServer todoServer = new TodoServer();  
  todoServer.main([]);  
}
```

## Write a Simple Client

Now that you have a server, lets write a client. I'll use inline comments to explain what this code is doing.

```dart client.dart
import 'package:grpc/grpc.dart';  
import 'package:grpc_tutorial/src/generated/todo.pbgrpc.dart'; // Import GRPC  
  
// Helper class to handle client methods. In the real world, you'd probably have wrappers aroudn each gRPC method call
class Client { 
  ClientChannel channel;  
  TodoClient stub;  
  
  Future<void> main(List<String> args) async {
	  // Create a new channel with localhost and the server port 
	  channel = ClientChannel('localhost',  
		  port: 8001,  
		  options:  // No credentials in this example
			  const ChannelOptions(credentials: ChannelCredentials.insecure()));
	  // Create the stub, which is the client that you interact with to get gRPC methods  
	  stub = TodoClient(channel,  
		  options: CallOptions(timeout: Duration(seconds: 30)));  
	  try {
		  // Create a new todo    
		  final TodoItem todoItem = new TodoItem();  
		  todoItem.text = "Test 1"; 
		  // Send a request to the server to make the new item 
		  var res = await stub.createTodo(todoItem);  
		  // Prints the recieved item
		  print(res);  
		  
		  // Create the void message
		  final v = new voidNoParam();
		  // Get a list of todos as a future  
		  var todos = await stub.readTodos(v);  
		  print(todos.items);  
		  
		  // Get the todos as a stream, listen to it, and print the values. If you run another client and create new todos, you'll see this stream get updated
		  stub.readTodosStream(v).listen((value) {print(value); });  
	 } catch (e) {  
		  print(e);  
	 }  
	 // Cleanup with shutdown
	 await channel.shutdown();  
 }}  
  
main() {  
  var client = Client();  
  client.main([]);  
}
```

Bam! That's it, you just created your first gRPC server and client exclusively in Dart. To integrate this in Flutter, you'd simply write more methods in the Client class, and then use it in widgets to add and get data (StreamBuilder is your friend). 
