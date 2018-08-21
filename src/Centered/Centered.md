```js
<div style={{height: '150px', width: '200px', position: 'relative', background: '#eee', border: '1px solid #ddd'}}>
  <Centered horizontal vertical>
    <div style={{textAlign: 'center'}}>This should be centered vertically and horizontally</div>
  </Centered>
</div>
<div style={{height: '200px', width: '100px', position: 'relative', background: '#eee', border: '1px solid #ddd'}}>
  <Centered horizontal vertical>
    <div style={{textAlign: 'center'}}>Should work with a vertical container</div>
  </Centered>
</div>
<div style={{height: '200px', width: '200px', position: 'relative', background: '#eee', border: '1px solid #ddd'}}>
  <Centered horizontal vertical>
    <div style={{textAlign: 'center'}}>Should work with a square</div>
  </Centered>
</div>
<div style={{height: '80px', width: '200px', position: 'relative', background: '#eee', border: '1px solid #ddd'}}>
  <Centered horizontal>
    <div style={{textAlign: 'center'}}>Should only be centered horizontally</div>
  </Centered>
</div>
<div style={{height: '80px', width: '200px', position: 'relative', background: '#eee', border: '1px solid #ddd'}}>
<Centered vertical>
  <div>Should only be centered vertically</div>
</Centered>
</div>
```
