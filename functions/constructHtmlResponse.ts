export const constructHtmlResponse = (): string => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node.js Serverless Function Enhanced Starter</title>
            <link rel="icon" href="https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" type="image/x-icon">
            <style>
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
                
                body {
                    font-family: Arial, sans-serif;
                    background-color: #121212;
                    color: #e0e0e0;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    position: relative;
                    text-align: center;
                    background: #1e1e1e;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
                }
                h1 {
                    color: #bb86fc;
                }
                p {
                    color: #b0bec5;
                }
                .online-indicator {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 10px;
                    height: 10px;
                    background-color: #00e676;
                    border-radius: 50%;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 0.9em;
                }
                .code {
                    background: #333;
                    padding: 2px 5px;
                    border-radius: 3px;
                    color: #76ff03;
                }
                .link {
                    margin-top: 20px;
                    font-size: 1em;
                    color: #b0bec5;
                }
                .github-icon {
                    margin-right: 5px;
                    color: #76ff03;
                }
                .link a {
                    color: #76ff03;
                    text-decoration: none;
                }
                .link a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <span class="online-indicator"></span>
                <h1>Node.js Serverless Function²</h1>
                <p>Explore our features and enjoy your stay. 😊</p>
                <div class="footer">
                    <p>✅ This is where a <strong>200 Request</strong> to <code class="code">/</code> using our <code class="code">vercel.json</code> rewrites produces.</p>
                    <p>🔄 <strong>PUT</strong> and <strong>POST</strong> requests go to other functions in the <code class="code">functions</code> directory.</p>
                    <p>🗂️ These are chosen by the serverless handler <code class="code">ts</code> file in the <code class="code">api/</code> directory.</p>
                </div>
                <p class="link">
                    <i class="fa fa-github github-icon"></i> Check out the code on GitHub:
                    <br>
                    <a href="https://github.com/Wal33D/serverless-vercel-function-enhanced.git" target="_blank">https://github.com/Wal33D/serverless-vercel-function-enhanced.git</a>
                </p>
            </div>
        </body>
        </html>
    `;
};
