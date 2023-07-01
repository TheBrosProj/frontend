'use client'
import React, { useState } from 'react';

function Page({ html }) {
  const [url, setUrl] = useState('');
  const [content, setContent] = useState(html);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
    const html = await res.text();
    setContent(html);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="Enter URL"
        />
        <button type="submit">Submit</button>
      </form>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://google.com');
  const html = await res.text();
  return {
    props: { html },
  };
}

export default Page;
