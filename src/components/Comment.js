import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import urljoin from 'url-join';
import ReactDisqusComments from 'react-disqus-comments';

export default function Comments({ title, path }) {
  const { site } = useStaticQuery(graphql`
    query CommentsQuery {
      site {
        siteMetadata {
          disqusShortname
          siteUrl
        }
      }
    }
  `);

  const { siteMetadata: { disqusShortname, siteUrl } } = site;

  if (!disqusShortname) return null;

  const url = urljoin(siteUrl, path);

  return (
    <>
      <h2 style={{ margin: '20px 0 20px 0' }}>
        Comentários
      </h2>
      <ReactDisqusComments
        shortname={disqusShortname}
        identifier={path}
        title={title}
        url={url}
      />
    </>
  );
};
