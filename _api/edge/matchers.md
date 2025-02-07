---
layout: default
title: "Namespace: matchers"
prettify: true
---

* goal
  * built-in Jasmine's matchers

* _Examples:_ [here](/examples/api-matchers)
    
# Members

## `.not.`

* == `not.someMatcher()`
  * invert `someMatcher`
    
# Methods

## `.nothing()`

* == expect NOTHING explicitly

## `.toBe(expected)`

* `===`
* `expected`
  * == object

## `.toBeCloseTo(expected, precision)`

* == 
* `expected`
  * == object
* precision
  * OPTIONAL
  * == number of decimal points / check

## `.toBeDefined()`

* TODO:




<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be defined. (Not <code>undefined</code>)</p>
</div>













<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>1.3.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(result).toBeDefined();</code></pre>



        
            

    

    
    ##  class="name" id="toBeFalse"><span class="type-signature"></span>toBeFalse<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be <code>false</code>.</p>
</div>













<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.5.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(result).toBeFalse();</code></pre>



        
            

    

    
    ##  class="name" id="toBeFalsy"><span class="type-signature"></span>toBeFalsy<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be falsy</p>
</div>













<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(result).toBeFalsy();</code></pre>



        
            

    

    
    ##  class="name" id="toBeGreaterThan"><span class="type-signature"></span>toBeGreaterThan<span class="signature">(expected)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be greater than the expected value.</p>
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
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">Number</span>



            </td>

            

            

            <td class="description last"><p>The value to compare against.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(result).toBeGreaterThan(3);</code></pre>



        
            

    

    
    ##  class="name" id="toBeGreaterThanOrEqual"><span class="type-signature"></span>toBeGreaterThanOrEqual<span class="signature">(expected)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be greater than or equal to the expected value.</p>
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
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">Number</span>



            </td>

            

            

            <td class="description last"><p>The expected value to compare against.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(result).toBeGreaterThanOrEqual(25);</code></pre>



        
            

    

    
    ##  class="name" id="toBeInstanceOf"><span class="type-signature"></span>toBeInstanceOf<span class="signature">(expected)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual to be an instance of the expected class</p>
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
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">Object</span>



            </td>

            

            

            <td class="description last"><p>The class or constructor function to check for</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.5.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect('foo').toBeInstanceOf(String);
expect(3).toBeInstanceOf(Number);
expect(new Error()).toBeInstanceOf(Error);</code></pre>









    ##  class="name" id="toBeLessThan"><span class="type-signature"></span>toBeLessThan<span class="signature">(expected)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be less than the expected value.</p>
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
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">Number</span>



            </td>

            

            

            <td class="description last"><p>The expected value to compare against.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(result).toBeLessThan(0);</code></pre>



        
            

    

    
    ##  class="name" id="toBeLessThanOrEqual"><span class="type-signature"></span>toBeLessThanOrEqual<span class="signature">(expected)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be less than or equal to the expected value.</p>
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
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">Number</span>



            </td>

            

            

            <td class="description last"><p>The expected value to compare against.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(result).toBeLessThanOrEqual(123);</code></pre>



        
            

    

    
    ##  class="name" id="toBeNaN"><span class="type-signature"></span>toBeNaN<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be <code>NaN</code> (Not a Number).</p>
</div>













<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>1.3.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(thing).toBeNaN();</code></pre>



        
            

    

    
    ##  class="name" id="toBeNegativeInfinity"><span class="type-signature"></span>toBeNegativeInfinity<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be <code>-Infinity</code> (-infinity).</p>
</div>













<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.6.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(thing).toBeNegativeInfinity();</code></pre>



        
            

    

    
    ##  class="name" id="toBeNull"><span class="type-signature"></span>toBeNull<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be <code>null</code>.</p>
</div>













<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>1.3.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(result).toBeNull();</code></pre>



        
            

    

    
    ##  class="name" id="toBePositiveInfinity"><span class="type-signature"></span>toBePositiveInfinity<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be <code>Infinity</code> (infinity).</p>
</div>













<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.6.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(thing).toBePositiveInfinity();</code></pre>



        
            

    

    
    ##  class="name" id="toBeTrue"><span class="type-signature"></span>toBeTrue<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be <code>true</code>.</p>
</div>













<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.5.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(result).toBeTrue();</code></pre>



        
            

    

    
    ##  class="name" id="toBeTruthy"><span class="type-signature"></span>toBeTruthy<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be truthy.</p>
</div>













<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(thing).toBeTruthy();</code></pre>



        
            

    

    
    ##  class="name" id="toBeUndefined"><span class="type-signature"></span>toBeUndefined<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be <code>undefined</code>.</p>
</div>













<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>1.3.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(result).toBeUndefined():</code></pre>



        
            

    

    
    ##  class="name" id="toContain"><span class="type-signature"></span>toContain<span class="signature">(expected)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to contain a specific value.</p>
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
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">Object</span>



            </td>

            

            

            <td class="description last"><p>The value to look for.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(array).toContain(anElement);
expect(string).toContain(substring);</code></pre>









    ##  class="name" id="toEqual"><span class="type-signature"></span>toEqual<span class="signature">(expected)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be equal to the expected, using deep equality comparison.</p>
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
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">Object</span>



            </td>

            

            

            <td class="description last"><p>Expected value</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>1.3.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(bigObject).toEqual({"foo": ['bar', 'baz']});</code></pre>



        
            

    

    
    ##  class="name" id="toHaveBeenCalled"><span class="type-signature"></span>toHaveBeenCalled<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual (a <a href="Spy.html"><code>Spy</code></a>) to have been called.</p>
</div>













<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>1.3.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(mySpy).toHaveBeenCalled();
expect(mySpy).not.toHaveBeenCalled();</code></pre>









    ##  class="name" id="toHaveBeenCalledBefore"><span class="type-signature"></span>toHaveBeenCalledBefore<span class="signature">(expected)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value (a <a href="Spy.html"><code>Spy</code></a>) to have been called before another <a href="Spy.html"><code>Spy</code></a>.</p>
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
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type"><a href="Spy.html">Spy</a></span>



            </td>

            

            

            <td class="description last"><p><a href="Spy.html"><code>Spy</code></a> that should have been called after the <code>actual</code> <a href="Spy.html"><code>Spy</code></a>.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.6.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(mySpy).toHaveBeenCalledBefore(otherSpy);</code></pre>



        
            

    

    
    ##  class="name" id="toHaveBeenCalledOnceWith"><span class="type-signature"></span>toHaveBeenCalledOnceWith<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual (a <a href="Spy.html"><code>Spy</code></a>) to have been called exactly once, and exactly with the particular arguments.</p>
</div>









    <h5>Parameters:</h5>


<table class="params">
    <thead>
    <tr>


        <th>Type</th>

        
        <th>Attributes</th>
        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            

            <td class="type">


<span class="param-type">Object</span>



            </td>

            
                <td class="attributes">
                

                

                
                    &lt;repeatable><br>
                
                </td>
            

            

            <td class="description last"><p>The arguments to look for</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.6.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(mySpy).toHaveBeenCalledOnceWith('foo', 'bar', 2);</code></pre>



        
            

    

    
    ##  class="name" id="toHaveBeenCalledTimes"><span class="type-signature"></span>toHaveBeenCalledTimes<span class="signature">(expected)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual (a <a href="Spy.html"><code>Spy</code></a>) to have been called the specified number of times.</p>
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
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">Number</span>



            </td>

            

            

            <td class="description last"><p>The number of invocations to look for.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.4.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(mySpy).toHaveBeenCalledTimes(3);</code></pre>



        
            

    

    
    ##  class="name" id="toHaveBeenCalledWith"><span class="type-signature"></span>toHaveBeenCalledWith<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual (a <a href="Spy.html"><code>Spy</code></a>) to have been called with particular arguments at least once.</p>
</div>









    <h5>Parameters:</h5>


<table class="params">
    <thead>
    <tr>


        <th>Type</th>

        
        <th>Attributes</th>
        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            

            <td class="type">


<span class="param-type">Object</span>



            </td>

            
                <td class="attributes">
                

                

                
                    &lt;repeatable><br>
                
                </td>
            

            

            <td class="description last"><p>The arguments to look for</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>1.3.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(mySpy).toHaveBeenCalledWith('foo', 'bar', 2);</code></pre>



        
            

    

    
    ##  class="name" id="toHaveClass"><span class="type-signature"></span>toHaveClass<span class="signature">(expected)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to be a DOM element that has the expected class</p>
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
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">Object</span>



            </td>

            

            

            <td class="description last"><p>The class name to test for</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.0.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>const el = document.createElement('div');
el.className = 'foo bar baz';
expect(el).toHaveClass('bar');</code></pre>









    ##  class="name" id="toHaveSize"><span class="type-signature"></span>toHaveSize<span class="signature">(expected)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual size to be equal to the expected, using array-like length or object keys size.</p>
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
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">Object</span>



            </td>

            

            

            <td class="description last"><p>Expected size</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.6.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>array = [1,2];
expect(array).toHaveSize(2);</code></pre>









    ##  class="name" id="toHaveSpyInteractions"><span class="type-signature"></span>toHaveSpyInteractions<span class="signature">()</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual (a <code>SpyObj</code>) spies to have been called.</p>
</div>













<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>4.1.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(mySpyObj).toHaveSpyInteractions();
expect(mySpyObj).not.toHaveSpyInteractions();</code></pre>









    ##  class="name" id="toMatch"><span class="type-signature"></span>toMatch<span class="signature">(expected)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> the actual value to match a regular expression</p>
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
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">RegExp</span>
|

<span class="param-type">String</span>



            </td>

            

            

            <td class="description last"><p>Value to look for in the string.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>1.3.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect("my string").toMatch(/string$/);
expect("other string").toMatch("her");</code></pre>









    ##  class="name" id="toThrow"><span class="type-signature"></span>toThrow<span class="signature">(expected<span class="signature-attributes">opt</span>)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> a function to <code>throw</code> something.</p>
</div>









    <h5>Parameters:</h5>


<table class="params">
    <thead>
    <tr>

        <th>Name</th>
        

        <th>Type</th>

        
        <th>Attributes</th>
        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">Object</span>



            </td>

            
                <td class="attributes">
                
                    &lt;optional><br>
                

                

                
                </td>
            

            

            <td class="description last"><p>Value that should be thrown. If not provided, simply the fact that something was thrown will be checked.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(function() { return 'things'; }).toThrow('foo');
expect(function() { return 'stuff'; }).toThrow();</code></pre>









    ##  class="name" id="toThrowError"><span class="type-signature"></span>toThrowError<span class="signature">(expected<span class="signature-attributes">opt</span>, message<span class="signature-attributes">opt</span>)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> a function to <code>throw</code> an <code>Error</code>.</p>
</div>









    <h5>Parameters:</h5>


<table class="params">
    <thead>
    <tr>

        <th>Name</th>
        

        <th>Type</th>

        
        <th>Attributes</th>
        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>expected</code></td>
            

            <td class="type">


<span class="param-type">Error</span>



            </td>

            
                <td class="attributes">
                
                    &lt;optional><br>
                

                

                
                </td>
            

            

            <td class="description last"><p><code>Error</code> constructor the object that was thrown needs to be an instance of. If not provided, <code>Error</code> will be used.</p></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>message</code></td>
            

            <td class="type">


<span class="param-type">RegExp</span>
|

<span class="param-type">String</span>



            </td>

            
                <td class="attributes">
                
                    &lt;optional><br>
                

                

                
                </td>
            

            

            <td class="description last"><p>The message that should be set on the thrown <code>Error</code></p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(function() { return 'things'; }).toThrowError(MyCustomError, 'message');
expect(function() { return 'things'; }).toThrowError(MyCustomError, /bar/);
expect(function() { return 'stuff'; }).toThrowError(MyCustomError);
expect(function() { return 'other'; }).toThrowError(/foo/);
expect(function() { return 'other'; }).toThrowError();</code></pre>









    ##  class="name" id="toThrowMatching"><span class="type-signature"></span>toThrowMatching<span class="signature">(predicate)</span><span class="type-signature"></span></h4>






<div class="description">
    <p><a href="global.html#expect"><code>expect</code></a> a function to <code>throw</code> something matching a predicate.</p>
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
            
                <td class="name"><code>predicate</code></td>
            

            <td class="type">


<span class="param-type">function</span>



            </td>

            

            

            <td class="description last"><p>A function that takes the thrown exception as its parameter and returns true if it matches.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">




    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.0.0</li></ul></dd>





























</dl>



















    <h5>Example</h5>
    
    <pre class="prettyprint"><code>expect(function() { throw new Error('nope'); }).toThrowMatching(function(thrown) { return thrown.message === 'nope'; });</code></pre>



        
            

    

    
## `.withContext(message)`

* allows
  * 👀adding context | matcher failures 👀
    * -> -- easily distinguished from -- similar expectations
* 👀return a matcher 👀
