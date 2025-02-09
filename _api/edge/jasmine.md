---
layout: default
title: "Namespace: jasmine"
prettify: true
---

# Members

* == Jasmine global's members
  * -> 👀[asymmetricEqualityTesters namespace](asymmetricEqualityTesters.md) -- can ALSO -- be accessed 👀
            
## `DEFAULT_TIMEOUT_INTERVAL`

* == static

<div class="description">
    <p>Default number of milliseconds Jasmine will wait for an asynchronous spec,
before, or after function to complete. This can be overridden on a case by
case basis by passing a time limit as the third argument to <a href="global.html#it"><code>it</code></a>,
<a href="global.html#beforeEach"><code>beforeEach</code></a>, <a href="global.html#afterEach"><code>afterEach</code></a>, <a href="global.html#beforeAll"><code>beforeAll</code></a>, or
<a href="global.html#afterAll"><code>afterAll</code></a>. The value must be no greater than the largest number of
milliseconds supported by setTimeout, which is usually 2147483647.</p>
<p>While debugging tests, you may want to set this to a large number (or pass
a large number to one of the functions mentioned above) so that Jasmine
does not move on to after functions or the next spec while you're debugging.</p>
</div>







<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>1.3.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-default">Default Value:</dt>
    <dd class="tag-default"><ul class="dummy">
            <li>5000</li>
        </ul></dd>
    
        
## `MAX_PRETTY_PRINT_ARRAY_LENGTH`

* == static




<div class="description">
    <p>Maximum number of array elements to display when pretty printing objects.
This will also limit the number of keys and values displayed for an object.
Elements past this number will be ellipised.</p>
</div>







<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.7.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-default">Default Value:</dt>
    <dd class="tag-default"><ul class="dummy">
            <li>50</li>
        </ul></dd>
    

    

    

    

    
</dl>

## `MAX_PRETTY_PRINT_CHARS`

<div class="description">
    <p>Maximum number of characters to display when pretty printing objects.
Characters past this number will be ellipised.</p>
</div>







<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.9.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-default">Default Value:</dt>
    <dd class="tag-default"><ul class="dummy">
            <li>100</li>
        </ul></dd>
    

    

    

    

    
</dl>
            
## `MAX_PRETTY_PRINT_DEPTH`

<div class="description">
    <p>Maximum object depth the pretty printer will print to.
Set this to a lower value to speed up pretty printing if you have large objects.</p>
</div>







<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>1.3.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-default">Default Value:</dt>
    <dd class="tag-default"><ul class="dummy">
            <li>8</li>
        </ul></dd>
    

    

    

    

    
</dl>






        
    

    
# Methods
    
## `addAsyncMatchers(matchers)`

* == static
    

    



<div class="description">
    <p>Add custom async matchers for the current scope of specs.</p>
<p><em>Note:</em> This is only callable from within a <a href="global.html#beforeEach"><code>beforeEach</code></a>, <a href="global.html#it"><code>it</code></a>, or <a href="global.html#beforeAll"><code>beforeAll</code></a>.</p>
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>matchers</code></td>
            

            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>

            

            

            <td class="description last"><p>Keys from this object will be the new async matcher names.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.5.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-see">See:</dt>
    <dd class="tag-see">
        <ul>
            <li><a href="/tutorials/custom_matcher">custom matcher</a></li>
        </ul>
    </dd>
    

    
</dl>

    
## `addCustomEqualityTester(tester)`

* == static
    

    



<div class="description">
    <p>Add a custom equality tester for the current scope of specs.</p>
<p><em>Note:</em> This is only callable from within a <a href="global.html#beforeEach"><code>beforeEach</code></a>, <a href="global.html#it"><code>it</code></a>, or <a href="global.html#beforeAll"><code>beforeAll</code></a>.</p>
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>tester</code></td>
            

            <td class="type">
            
                
<span class="param-type">function</span>


            
            </td>

            

            

            <td class="description last"><p>A function which takes two arguments to compare and returns a <code>true</code> or <code>false</code> comparison result if it knows how to compare them, and <code>undefined</code> otherwise.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-see">See:</dt>
    <dd class="tag-see">
        <ul>
            <li><a href="/tutorials/custom_equality">custom equality</a></li>
        </ul>
    </dd>
    

    
</dl>




















        
            

    

    
## `addCustomObjectFormatter(formatter)`
    

    



<div class="description">
    <p>Add a custom object formatter for the current scope of specs.</p>
<p><em>Note:</em> This is only callable from within a <a href="global.html#beforeEach"><code>beforeEach</code></a>, <a href="global.html#it"><code>it</code></a>, or <a href="global.html#beforeAll"><code>beforeAll</code></a>.</p>
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>formatter</code></td>
            

            <td class="type">
            
                
<span class="param-type">function</span>


            
            </td>

            

            

            <td class="description last"><p>A function which takes a value to format and returns a string if it knows how to format it, and <code>undefined</code> otherwise.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.6.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-see">See:</dt>
    <dd class="tag-see">
        <ul>
            <li><a href="/tutorials/custom_object_formatters">custom object_formatters</a></li>
        </ul>
    </dd>
    

    
</dl>




















        
            

    

    
## `addMatchers(matchers)`

* == static
    

    



<div class="description">
    <p>Add custom matchers for the current scope of specs.</p>
<p><em>Note:</em> This is only callable from within a <a href="global.html#beforeEach"><code>beforeEach</code></a>, <a href="global.html#it"><code>it</code></a>, or <a href="global.html#beforeAll"><code>beforeAll</code></a>.</p>
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>matchers</code></td>
            

            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>

            

            

            <td class="description last"><p>Keys from this object will be the new matcher names.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-see">See:</dt>
    <dd class="tag-see">
        <ul>
            <li><a href="/tutorials/custom_matcher">custom matcher</a></li>
        </ul>
    </dd>
    

    
</dl>




















        
            

    

    
## class="name" id=".addSpyStrategy"><span class="type-signature">(static) </span>addSpyStrategy<span class="signature">(name, factory)</span><span class="type-signature"></span>
    

    



<div class="description">
    <p>Add a custom spy strategy for the current scope of specs.</p>
<p><em>Note:</em> This is only callable from within a <a href="global.html#beforeEach"><code>beforeEach</code></a>, <a href="global.html#it"><code>it</code></a>, or <a href="global.html#beforeAll"><code>beforeAll</code></a>.</p>
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>

            

            

            <td class="description last"><p>The name of the strategy (i.e. what you call from <code>and</code>)</p></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>factory</code></td>
            

            <td class="type">
            
                
<span class="param-type">function</span>


            
            </td>

            

            

            <td class="description last"><p>Factory function that returns the plan to be executed.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.5.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>




















        
            

    

    
## class="name" id=".clock"><span class="type-signature">(static) </span>clock<span class="signature">()</span><span class="type-signature"> &rarr; {<a href="Clock.html">Clock</a>}</span>
    

    



<div class="description">
    <p>Get the currently booted mock {Clock} for this Jasmine environment.</p>
</div>













<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>















<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type"><a href="Clock.html">Clock</a></span>


    </dd>
</dl>

    





        
            

    

    
## `.createSpy(name, originalFn) -> Spy`
    
* create a bare `Spy` /
  * NOT installed | anywhere
    * ⚠️== NOT attached | ANY object ⚠️
  * NO implementation 
* `name`
  * optional
  * == `string`
  * == spy name
  * uses
    * | failure messages
* `originalFn`
  * optional
  * == `function`
    * recommendations
      * use [`spyOn`](global.md)
  * requirements
    * ⚠️invoke BEFORE `someSpy.and.callThrough()` ⚠️ 
      * -> subsequent calls will use it
      * OTHERWISE, undefined

## `createSpyObj(baseName, methodNames, propertyNames) -> Object`

* `baseName`
  * optional
  * == base name | object's spies
  * uses
    * spy object's identifier | tracking messages
* `methodNames`
  * == [String] | Object
    * if you use Object -> 
      * Object's keys == method names
      * Object's values == `returnValue`
* `propertyNames`
  * optional
  * == spyObject's properties
  * == [String] | Object
    * if you use Object ->
        * Object's keys == property names
        * Object's values == `returnValue`
* allows
  * creating an object / 
    * 👀's members (method & properties) == MULTIPLE [Spy](Spy.md) 👀
    
## class="name" id=".debugLog"><span class="type-signature">(static) </span>debugLog<span class="signature">(msg)</span><span class="type-signature"></span>

* TODO:

    



<div class="description">
    <p>Logs a message for use in debugging. If the spec fails, trace messages
will be included in the <a href="global.html#SpecResult"><code>result</code></a> passed to the
reporter's specDone method.</p>
<p>This method should be called only when a spec (including any associated
beforeEach or afterEach functions) is running.</p>
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>msg</code></td>
            

            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>

            

            

            <td class="description last"><p>The message to log</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>4.0.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>




















        
            

    

    
## class="name" id=".getEnv"><span class="type-signature">(static) </span>getEnv<span class="signature">()</span><span class="type-signature"> &rarr; {<a href="Env.html">Env</a>}</span>
    

    



<div class="description">
    <p>Get the currently booted Jasmine Environment.</p>
</div>













<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>1.3.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>















<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type"><a href="Env.html">Env</a></span>


    </dd>
</dl>

    





        
            

    

    
## class="name" id=".isSpy"><span class="type-signature">(static) </span>isSpy<span class="signature">(putativeSpy)</span><span class="type-signature"> &rarr; {Boolean}</span>
    

    



<div class="description">
    <p>Determines whether the provided function is a Jasmine spy.</p>
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>putativeSpy</code></td>
            

            <td class="type">
            
                
<span class="param-type">function</span>


            
            </td>

            

            

            <td class="description last"><p>The function to check.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>















<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Boolean</span>


    </dd>
</dl>

    





        
            

    

    
## class="name" id=".setDefaultSpyStrategy"><span class="type-signature">(static) </span>setDefaultSpyStrategy<span class="signature">(defaultStrategyFn)</span><span class="type-signature"></span>
    

    



<div class="description">
    <p>Set the default spy strategy for the current scope of specs.</p>
<p><em>Note:</em> This is only callable from within a <a href="global.html#beforeEach"><code>beforeEach</code></a>, <a href="global.html#it"><code>it</code></a>, or <a href="global.html#beforeAll"><code>beforeAll</code></a>.</p>
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>defaultStrategyFn</code></td>
            

            <td class="type">
            
                
<span class="param-type">function</span>


            
            </td>

            

            

            <td class="description last"><p>a function that assigns a strategy</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>beforeEach(function() {
  jasmine.setDefaultSpyStrategy(and => and.returnValue(true));
});</code></pre>



        
            

    

    
## class="name" id=".spyOnGlobalErrorsAsync"><span class="type-signature">(async, static) </span>spyOnGlobalErrorsAsync<span class="signature">(fn)</span><span class="type-signature"></span>
    

    



<div class="description">
    <p>Replaces Jasmine's global error handling with a spy. This prevents Jasmine
from treating uncaught exceptions and unhandled promise rejections
as spec failures and allows them to be inspected using the spy's
<a href="Spy_calls.html"><code>calls property</code></a> and related matchers such as
<a href="matchers.html#toHaveBeenCalledWith"><code>toHaveBeenCalledWith</code></a>.</p>
<p>After installing the spy, spyOnGlobalErrorsAsync immediately calls its
argument, which must be an async or promise-returning function. The spy
will be passed as the first argument to that callback. Normal error
handling will be restored when the promise returned from the callback is
settled.</p>
<p>When the JavaScript runtime reports an uncaught error or unhandled rejection,
the spy will be called with a single parameter representing Jasmine's best
effort at describing the error. This parameter may be of any type, because
JavaScript allows anything to be thrown or used as the reason for a
rejected promise, but Error instances and strings are most common.</p>
<p>Note: The JavaScript runtime may deliver uncaught error events and unhandled
rejection events asynchronously, especially in browsers. If the event
occurs after the promise returned from the callback is settled, it won't
be routed to the spy even if the underlying error occurred previously.
It's up to you to ensure that all of the error/rejection events that you
want to handle have occurred before you resolve the promise returned from
the callback.</p>
<p>You must ensure that the <code>it</code>/<code>beforeEach</code>/etc fn that called
<code>spyOnGlobalErrorsAsync</code> does not signal completion until after the
promise returned by <code>spyOnGlobalErrorsAsync</code> is resolved. Normally this is
done by <code>await</code>ing the returned promise. Leaving the global error spy
installed after the <code>it</code>/<code>beforeEach</code>/etc fn that installed it signals
completion is likely to cause problems and is not supported.</p>
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>fn</code></td>
            

            <td class="type">
            
                
<span class="param-type">AsyncFunction</span>


            
            </td>

            

            

            <td class="description last"><p>A function to run, during which the global error spy will be effective</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>it('demonstrates global error spies', async function() {
  await jasmine.spyOnGlobalErrorsAsync(async function(globalErrorSpy) {
    setTimeout(function() {
      throw new Error('the expected error');
    });
    await new Promise(function(resolve) {
      setTimeout(resolve);
    });
    const expected = new Error('the expected error');
    expect(globalErrorSpy).toHaveBeenCalledWith(expected);
  });
});</code></pre>



        
    

    

    
</article>

</section>
