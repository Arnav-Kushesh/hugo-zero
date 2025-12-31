import React from 'react';
import { FrontmatterEditor, FormGroup, EmptyState } from './FrontmatterTab.styled';

function FrontmatterTab({ postData, setPostData }) {
  const frontmatter = postData?.frontmatter || {};
  const fields = Object.keys(frontmatter);

  if (fields.length === 0) {
    return (
      <FrontmatterEditor>
        <EmptyState>No frontmatter fields</EmptyState>
      </FrontmatterEditor>
    );
  }

  return (
    <FrontmatterEditor id="frontmatterEditor">
        {fields.map(key => {
          const value = frontmatter[key];
          const isBoolean = typeof value === 'boolean';
          const isArray = Array.isArray(value);
          const isObject = typeof value === 'object' && value !== null && !isArray;
          
          if (isBoolean) {
            return (
              <FormGroup key={key}>
                <label>
                  <input
                    type="checkbox"
                    data-key={key}
                    defaultChecked={value}
                  />
                  {key}
                </label>
              </FormGroup>
            );
          } else if (isArray) {
            return (
              <FormGroup key={key}>
                <label>{key}:</label>
                <textarea
                  data-key={key}
                  placeholder="One item per line"
                  defaultValue={value.join('\n')}
                />
              </FormGroup>
            );
          } else if (isObject) {
            return (
              <FormGroup key={key}>
                <label>{key}:</label>
                <textarea
                  data-key={key}
                  placeholder="JSON object"
                  defaultValue={JSON.stringify(value, null, 2)}
                />
              </FormGroup>
            );
          } else {
            return (
              <FormGroup key={key}>
                <label>{key}:</label>
                <input
                  type="text"
                  data-key={key}
                  defaultValue={String(value)}
                />
              </FormGroup>
            );
          }
        })}
    </FrontmatterEditor>
  );
}

export default FrontmatterTab;
