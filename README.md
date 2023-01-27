**Chapter 09 Optimizing Our App**

\1) When and why do we need lazy()?

`            `Suppose we are building a large based web application like swiggy, and amazon, and there will be a so much component we are using on that and all component bundled together and create one large JS file, then our performance rate of our app will be slow or down. So we don’t want that our all component bundle in one JS file we want that for large component I will create a another JS file so we will be using a lazy().

const Offerss = lazy(() => import("./Offer"));

\2) What is suspense?

`            `Suspense will wait while our file is loading it is a same as what await is doing for us. If we don’t use suspense, then it will throw an error while our file is not loaded at.

{

`        `path: "/offer",

`        `element: (

`          `<Suspense fallback={<Shimmer />}>

`            `<Offerss />

`          `</Suspense>

`        `),

`      `},

\3) Why we got this error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

`            `We already seen that when our component under the suspense it takes some times to render and during this render we use fallback. If we don’t want to create a fallback for our component then we can tell react that you can show the old component and render the new one when its ready using startTransition method.

**React.startTransition(callback)**

\4) Advantage and DisAdvantage of code splitting?

`             `code splitting can be very helpful in terms of improving the performance as the different bundles can be loaded when required. The only drawback about code splitting is that you can only use it in client side rendering. Both the above techniques won't work during server side rendering when it comes to React. This is the reason why the React team recommends using loadable components for code splitting in the server.
