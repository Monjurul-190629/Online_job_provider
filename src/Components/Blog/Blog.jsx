

const Blog = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="font-bold text-3xl my-10">
                Click on the question and get answer !
            </div>
            <div className="collapse bg-blue-900 text-white md:w-[800px] text-center">
                <input type="radio" name="my-accordion-1" defaultChecked />

                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token?<br/> How do they work and where should
                    we store them on the client side?
                </div>
                <div className="collapse-content text-justify">
                    <p className="mb-5">
                        <span className="font-bold text-xl">Access token :</span> An access token is a short-lived credential used to access protected resources on behalf of the user. It contains information about the user and the permissions granted, and it is usually a JSON Web Token (JWT).
                    </p>
                    <p className="mb-5">
                        <span className="font-bold text-xl">Refresh token :</span> A refresh token is a long-lived credential used to obtain new access tokens without requiring the user to re-authenticate. It is only used to get new access tokens and does not grant access to resources directly.
                    </p>
                    <p>
                        <span className="font-bold text-xl mb-4">Access token works : </span>
                        <ul className="list-disc">
                            <li>
                               <span className="font-bold mb-4">Issuance: </span>When a user logs in and is authenticated by the authorization server (such as OAuth provider), the server issues an access token.
                            </li>
                            <li>
                            <span className="font-bold mb-4">Usage: </span> The client (e.g., a web or mobile app) includes the access token in the authorization header (Authorization: Bearer token) of HTTP requests to access protected resources on the resource server.
                            </li>
                            <li>
                            <span className="font-bold mb-4">Expiration: </span>Access tokens are typically short-lived (e.g., valid for minutes to hours) to limit the potential damage if the token is compromised
                            </li>
                        </ul>
                    </p>
                    <p className="py-5">
                        <span className="font-bold text-xl my-5">Refresh token works : </span>
                        <ul className="list-disc">
                            <li>
                            <span className="font-bold mb-4">Issuance: </span>Along with the access token, the authorization server issues a refresh token during the initial authentication process.
                            </li>
                            <li>
                            <span className="font-bold mb-4">Usage: </span> When the access token expires, the client can use the refresh token to request a new access token from the authorization server.
                            </li>
                            <li>
                            <span className="font-bold mb-4">Expiration: </span>Refresh tokens are typically long-lived (days, weeks, or even months) but can also be revoked by the server to invalidate the session.
                            </li>
                        </ul>
                    </p>
                    <p className="mb-5">
                        <span className="font-bold text-xl">Stored : Access token</span>
                        <ul className="list-disc">
                            <li>
                            <span className="font-bold">Local Storage:</span> Accessible across tabs and sessions but vulnerable to XSS (Cross-Site Scripting) attacks.
                            </li>
                            <li>
                            <span className="font-bold">Session Storage:</span> Safer against XSS as it's only accessible within the tab's session but not persistent across tabs or sessions.
                            </li>
                            <li>
                            <span className="font-bold">HttpOnly Cookies:</span>   More secure as they are not accessible via JavaScript, reducing the risk of XSS. Use the SameSite attribute to mitigate CSRF (Cross-Site Request Forgery) attacks.
                            </li>
                        </ul>
                    </p>
                    <p className="mb-5">
                        <span className="font-bold text-xl ">Stored : Refresh token</span>
                        <ul className="list-disc">
                            <li>
                            <span className="font-bold">HttpOnly Cookies:</span>The best practice for refresh tokens in web applications. They are not accessible via JavaScript, reducing the risk of XSS attacks.
                            </li>
                            <li>
                            <span className="font-bold">Secure Storage in Mobile Apps:</span> Use the platform-specific secure storage solutions (e.g., Keychain on iOS, Keystore on Android) to store refresh tokens.
                            </li>
                            
                        </ul>
                    </p>
                </div>
            </div>
            <div className="collapse bg-blue-900 text-white text-center md:w-[800px] my-10">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-bold font-medium">
                What is express js? What is Nest JS ?
                </div>
                <div className="collapse-content">
                    <p className="my-5">
                     <span className="font-bold">Express js : </span> Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is a popular choice for building APIs and web servers due to its simplicity and ease of use.
                    </p>
                    <p className="my-5">
                     <span className="font-bold">Next js : </span> NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with TypeScript and heavily inspired by Angular, making it suitable for developers familiar with Angular's architecture and design principles.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;