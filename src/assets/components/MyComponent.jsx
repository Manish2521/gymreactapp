import React from 'react';
import './MyComponent.css';

function MyComponent() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
        <meta name="generator" content="Jekyll v4.1.1" />
        <title>Product example · Bootstrap</title>
        <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/product/" />
        <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />
        <style>
          {`.bd-placeholder-img { font-size: 1.125rem; text-anchor: middle; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }`}
          {`@media (min-width: 768px) { .bd-placeholder-img-lg { font-size: 3.5rem; } }`}
        </style>
        <link href="product.css" rel="stylesheet" />
      </head>
      <body>
        <nav className="site-header sticky-top py-1">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <a className="py-2" href="#" aria-label="Product">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#">Tour</a>
            <a className="py-2 d-none d-md-inline-block" href="#">Product</a>
            <a className="py-2 d-none d-md-inline-block" href="#">Features</a>
            <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
            <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
            <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
            <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>
          </div>
        </nav>


      </body>
    </html>
  );
}

export default MyComponent;