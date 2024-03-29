import React from 'react'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  }
};

export const decorators = [
  (story)=> (
    <div style={{padding: '20px'}}>
      { story() }
    </div>
  )
]
