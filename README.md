<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe Cookie Info
</h1>

&nbsp;

<h3 align="center">
  -- Abandonware. This package is deprecated! --
</h3>

&nbsp;

ReactJS component for showing information about using cookies by your app/site.

### Adding default cookie info nag
```js
import CookieInfo from 'meteor/universe:cookie-info';

<CookieInfo />
```

### Adding custom component as info content
If you add your own component, you have to call `props.onConsent()` when user agrees.
```js
import CookieInfo from 'meteor/universe:cookie-info';

const YourComponentWithInfo = (props) => (
    <div className="cookie-policy">
        <p>
            This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies. <a href="/cookies">Find out more here</a>.
        </p>
        <p>
            <a href="#" onClick={e => {e.preventDefault(); props.onConsent();}}>
                <span className="sr-only">OK</span>
            </a>
        </p>
    </div>
);

<CookieInfo>
    <YourComponentWithInfo />
</CookieInfo>
```


### Removing default styling
Just set "clearStyle" prop to `CookieInfo`.
```js
<CookieInfo clearStyle>
    <YourComponentWithInfo />
</CookieInfo>
```

### License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe Cookie Info is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**
