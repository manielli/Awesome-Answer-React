import React from 'react';

const NotFoundPage = props => (
    <main>
        <h1>404 Not Found  </h1>
        <p><strong>{window.location.href}</strong> doesn't exist...</p>
    </main>
);

export default NotFoundPage;