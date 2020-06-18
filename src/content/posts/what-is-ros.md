---
layout: post
title: 'What is ROS?'
author: [Caelin]
tags: ['ROS']
image: ../img/what-is-ros.png
smallImage: true
date: '2020-05-26'
excerpt: ROS, or the Robot Operating System, is a popular framework for developing reusable code for robot platforms
---
  
# A Brief Introduction to the Robot Operating System (ROS)
If you're reading this, you've probably ran into the term ROS somewhere in the internet and are curious what exactly it is. ROS stands for the Robot Operating System, yet it isn't an actual operating system. It's a framework designed to expedite the development time of robot platforms. To understand what ROS is, we should understand why ROS exists in the first place.

# Why does ROS exist?
In general, software developers avoid hardware like the plague. It's messy, doesn't have consistent behavior, and there's no `ctrl-z` in sight.

Most beginner programmers think you have to have a deep knowledge of electronics and even mechanics to program robots. They think that the hardware and software are so tightly coupled, you have to know both in depth to build anything useful.

Software developers became software developers for a reason, so they don't have to deal with hardware. For example, lets say you have to debug a faulty sensor. You first have to take out the sensor from the enclosure, test the sensor thoroughly with a multi meter and various test cases, document its behavior, then examine the hardware -level code to ensure that there were no bugs, and so on. That's a lot of interaction with the hardware that's not fun for someone who just wants to write some cool software.

It's harder to attract good programmers if the programming is coupled deeply with hardware. This is where ROS comes into play. **With ROS, you can completely abstract the hardware from software, and instead interact with an API that gives access to that data. You can forget about the hardware, and focus on developing the software that makes the robot do what you want.** 

# The ROS API
ROS is a framework on top of the OS that allows it to bastract hardware from software. Imagine it like a server, where you can make data and action endpoints globally accessible to all the different pieces of software in your system. 

The ROS API is a list of ROS topics, services, action servers, and messages that a robot provides to give access to hardware, like sensors or actuators. If you're not familiar with ROS, you may not  know what those terms mean. In general developer languages, topics, services, and messages are like software functions you can call on a Robot to get a data feed from sensors or make the robot take some sort of action. Image a REST API with various endpoints that you can "get" data from or "put" data to, the ROS API allows you to perform those same sort of actions with robot hardware.

Most modern robots provide off-the-shelf ROS API's so you can easily interact with their hardware. If not, you can easily ROSify a Robot by writing code that connects the hardware code to the ROS networking layer.


# Why ROS?
**ROS is the standard in robotics programming.** From research to industry development, startups and businesses base their software stack in ROS.

Before ROS, every robot had to be programmed with a manufacturer specific API. This meant writing code that wasn't reusable on multiple types of robots, having to learn entirely new APIs, and all the other icky parts of writing new low level code. ROS is like the Windows for PC, it provides a universal standard for software to interact with hardware.

## Example of ROS Nodes and Topics

ROS separates your programs into different "nodes". Each node can publish or receive data on "topics". For example, an autonomous car would have hundreds of nodes. Some would be sensor nodes, like the front facing camera or the rear LIDAR system that publish their data on the topics `/camera/front` and `/lidar/rear` respectively. You then may have an obstacle avoidance system, that "subscribes" to those topics, getting the data from them, runs some code analyzing those sensor inputs, then outputs a steering command to `/steering`. The drive system node then takes in `/steering` and physically turns the wheel hardware. The navigation system is decoupled from the sensor systems. All it needs is data coming from the topics `/camera/front` and `/lidar/rear`, it could care less if the sensors are on the same robot. 

### ROS Graph Example
![](https://roboticsbackend.com/wp-content/uploads/2019/07/rqt_graph_turtlesim.png)

In this photo, you can see a few different topics and a single node. The node, signaled by the box, is `/turtle1`. This node is sending and receiving data to the topics `/turtle1/pose`, `/turtle1/color_sensor`, and `/turtle1/cmd_vel`. `pose`is the position of the turtle, the `color_sensor` topic is a sensor, and the `cmd_vel` is the commands given to control the robot. The node `/teleop_turtle` is the controller that's sending data that's received by the `cmd_vel` topic, which actually controls the robot. The `/turtlesim` node represents the simulator that this is all part of. It updates the current position of the turtle, `/turtle1/pose`, the sensor input, `/turtle1/color_sensor`, and is affected by the movement of the robot, which is why `/turtle1/color_sensor`. 

This level of abstraction increases re-usability of ROS components across platforms. You can run the same navigation stack on a car, boat, or plane, as long as you have the correct sensors publishing to the correct topics. Now you can obviously see that in a real-world robotics system, you may have hundreds of topics and nodes publishing and receiving data all in real time over a network, pretty beautiful!

# Getting Started with ROS
Obviously, it's not easy to get started developing in ROS. ROS currently has two main API versions, ROS1 and ROS2. Each of these API versions have several releases depending on the OS it runs on. ROS1 is built to run on Ubuntu. ROS2 is supported on Ubuntu, Windows, or MacOS. I generally recommend learning ROS2, as it's newer and ROS1 support will be weaning in the coming years (the latest release, Foxy, will likely be the last). You can start some of the beginner tutorials for ROS2 [here](https://index.ros.org/doc/ros2/Tutorials/). 
