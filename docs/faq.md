# FAQ

## Does This Scale?

DropStack's approach to scalability is unique. Here's what makes it special:

### Dynamic

We don't under-allocate or over-allocate resources. You don't have to ever adjust any knobs, configure instances or set up processes.

### Hybrid-cloud

We don't depend on a single specific cloud provider, but abstract them instead. This means that we can always find the best combination of cost, performance, reliability and resistance to failure or censorship.

## Why not AWS Lambda / Azure Functions / Google Cloud Functions?

### Exposing Just a Function Is Not Enough

In real-world applications the metadata of the request is of particular importance.

The response might vary, for example, according to the capabilities of the client. If the User-Agent is so, or the Accept header is such. These won't be automatically present in your payloads, so you'll have to manually supply them in each function call.
The other missing feature is the response code. Instead of returning 404 when something is not found, 403 when the permissions are not met or 500 when something goes wrong, you'll end up creating a new ad-hoc codec for errors that only your own system understands.

### It Leads to Lock-In

The way most cloud providers address the problems described above is by introducing a context object that has access to information from the environment.

The problem is that this context object varies ever so slightly from provider to provider. Were this to be standarized, it would look like HTTP.

### We Serve All Your Apps Over HTTP/2

HTTP/2 has two critical features that make your requests effectively as lean as "micro functions", from a bandwidth and efficiency perspective:

* **Multiplexing** HTTP/2 exhibits great latency characteristics and bandwidth use by re-utilizing the same TCP connection for all communications. This provides a great advantage for mobile users specially.
* **Header compression** Headers that are the same over the lifetime of a connection are not sent multiple times.

## How Do I Run My Build Process?

## How Does My App Detect now?

## Can I Host Static Websites?

## Who's behind now?