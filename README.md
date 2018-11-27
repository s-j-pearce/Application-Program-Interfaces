# Application-Program-Interfaces

### What is an API?
API or Application program interfaces is a form of software or a tool which helps developers. The API will allow the developer to have a list of preset operations as well as their descriptions as to what they do. API's do the hard parts so it helps in reducing the amount of code that the developers need to create. API's can also be used in order to control access to hardware devices and certain software functions that an application might not usually have permission to use - For this reason API's usually play a big role in security. In general, APIs define the rules that programmers need to follow in order to interact with a programming language, a software library, or any other software tool.

### Need for API's?
API's help developers save time by allowing them to have a set a preset commands which means the developer does not need to create as many lines of code. There are a lot of different API's for a lot of different situations. The release of the Iphone and how apps that followed through apple and android meant that companies needed to allow users access to information through the apps and not just through the internet. API's allow companies to produce raw data that other organisations can use to create a new look at the way the data is output. The data is simply provided with by the API which allows users to have virtually no limits on how that data is used and expressed. A huge benefit of any Web API is that they are built around the HTTP protocol meaning that nearly any programming language could be used to access them.

### Types of API's
#### Web service API's
A web service is a peice of software or system which allows access to its services through an address on the world wide web. The address is known as a URi or URL. The main focus is that the web service offers the information in a format that other applications can understand/read. A good example of a Web API could be Google Static Maps API as well as other google maps web services. 

A web service API will use HTTP to exchange its information. It will also use the HTTPS in order to exchange encrypted data. When a user or the application wants to communicate with the web sevice, it will send an HTTP request. once received, the web service will then send a HTTP response. The URL itself holds all of the required information within the request - through paths within the URL as well as URL parameters.

On top of the URL, HTTP requests and responses will also include information in the header and the body message. Request and response 'Headers' will include various types of metadata, this data could include which browser is being used to send the requests, the content type, which language is being used(Human language) as well as much more. THe body includes additional data within the requests and responses. This data comes in the format of XML and JSON. The conversion process which converts databases or classes to the correct format is called 'data serialization'.

##### The most common types of webservices:
###### SOAP (Simple Object Access Protocol)
SOAP is a protocol the defines the communication method as well as the structure of the messages. The data transfer format is XML. A SOAP service will publish a definition of its interface in a machine-readable document using WSDL(Web services definition language).
###### XML-RPC
XML-RPC is an older protocol than SOAP. It uses a specific XML format for data transfer even though SOAP allows a proprietary XML format. XML-RPC calls tend to be much more simpler as well as using a lot less bandwidth than a SOAP call. SOAP and XML-RPC have different levels of support in various libraries.
###### JSON-RPC
JSON-RPC is very similar to the XML-RPC however it uses JSON instead of XML for data transfer.
###### REST (Representational state transfer)
REST itself is not an protocol however it is a set of architectual principles. What differentiates a REST service from the other web services is its architecture. Some of the charachteristics required of a REST service include simplicity of interfaces, identification of resources with the request as well as the ability to manipulate the resources though the interface. On top of this, there are a number of other fundimental architectural requirements too.

When looked at from the point of view of a client application, REST services tend to offer an easy-to-parse URL structure which consists primarily of nouns that reflect the logical, heirarchical categories of the data on offer.

For example, let’s say you need to get a list of towns from an API at example-towns-service.com. You might submit a request like this:
http://example-towns-service.com/towns

Perhaps you already know the county of the town your looking for,Bedfordshire, and you need to know the number of towns. You request might look like this:
http://example-towns-service.com/towns/bedfordshire

The towns service might then send a response containing a bunch of information about the county, including a field “number-of-towns” containing the value “9”.

The most commonly used data format is JSON or XML. Usually the service will offer a choice where the client can request one or the other. This process is usually done by including "json" or "xml" in the URL path or in a URL parameter.


#### Library-based API's

#### Class-based API's (Object orientated) - a special type of library-based API

#### Function or routines in an OS

#### Object remoting API's

#### Hardware API's

#### Other developer products

### Relationship between an API and SDK
