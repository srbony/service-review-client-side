import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 '>

            <div className='flex bg-cyan-800 text-white rounded-lg p-4 text-2xl'>
                <div className='mr-8'>
                    <h2>SQL</h2>
                    <p>1.Structured query language (SQL)</p>
                    <p>2.SQL databases are table based databases</p>
                    <p>3.SQL databases have a predefined schema</p>
                    <p>4.SQL databases are primarily called RDBMS or Relational Databases</p>
                </div>
                <div className=''>
                    <h2>NOSQL</h2>
                    <p>1.No declarative query language</p>
                    <p>2.NoSQL databases can be document based, key-value pairs, graph databases</p>
                    <p>3.NoSQL databases use dynamic schema for unstructured data.</p>
                    <p>4.NoSQL databases are primarily called as Non-relational or distributed database</p>
                </div>
            </div>
            <div className='bg-cyan-800 text-white rounded-lg p-4 text-2xl my-4'>
                <h2>What is JWT? and how does it work?</h2>
                <p> <span className='text-amber-400 '>JWT:</span> JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.</p>
                <p> <span className='text-amber-400 text-2xl'>How does it work</span>:Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
            </div>
            <div className='my-4'>
                <h2 className='text-2xl text-amber-600'>Difference between javascript and node js</h2>

                <div className='flex bg-cyan-800 text-white rounded-lg p-4 text-2xl my-4'>
                    <div>
                        <h2>Javascript</h2>
                        <p>1.Javascript is a programming language that is used for writing scripts on the website. </p>
                        <p>2.It is basically used on the client-side.</p>
                        <p>3.Javascript can only be run in the browsers.</p>
                        <p>4.Javascript is capable enough to add HTML and play with the DOM. </p>
                        <p>5.Javascript is used in frontend development.</p>
                    </div>
                    <div>
                        <h2>Node js</h2>
                        <p>1.NodeJS is a Javascript runtime environment.</p>
                        <p>2.It is mostly used on the server-side.</p>
                        <p>3.We can run Javascript outside the browser with the help of NodeJS.</p>
                        <p>4.Nodejs does not have capability to add HTML tags.</p>
                        <p>5.Nodejs is used in server-side development.</p>
                    </div>
                </div>
                <div>
                    <div className=' bg-cyan-800 text-white rounded-lg p-4 text-2xl my-4'>
                        <h2 className='text-2xl text-amber-600'>How does node js handle multiple requests at the same time?</h2>
                        <p>Answer:NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Blog;