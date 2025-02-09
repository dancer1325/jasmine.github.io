---
layout: default
title: "Interface: SpyStrategy"
prettify: true
---
    
# Members

## `identity :String`

* == spy's identifying information
    
# Methods

## `callFake(fn)`
    
* TODO:
    



<div class="description">
    <p>Tell the spy to call a fake implementation when invoked.</p>
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
            
                
<span class="param-type">function</span>


            
            </td>

            

            

            <td class="description last"><p>The function to invoke with the passed parameters.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>




















        
            

    

    
## `callThrough()`
    

    



<div class="description">
    <p>Tell the spy to call through to the real implementation when invoked.</p>
</div>













<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>




















        
            

    

    
## `exec()`
    

    



<div class="description">
    <p>Execute the current spy strategy.</p>
</div>













<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>




















        
            

    

    
## `rejectWith(value)`
    

    



<div class="description">
    <p>Tell the spy to return a promise rejecting with the specified value when invoked.</p>
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
            
                <td class="name"><code>value</code></td>
            

            <td class="type">
            
                
<span class="param-type">*</span>


            
            </td>

            

            

            <td class="description last"><p>The value to return.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.5.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>




















        
            

    

    
## `resolveTo(value)`
    

    



<div class="description">
    <p>Tell the spy to return a promise resolving to the specified value when invoked.</p>
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
            
                <td class="name"><code>value</code></td>
            

            <td class="type">
            
                
<span class="param-type">*</span>


            
            </td>

            

            

            <td class="description last"><p>The value to return.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.5.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>




















        
            

    

    
## `returnValue(value)`
    
* if spy is invoked -> return the value
* `value`
  * any type
  * == value to return
    
## `returnValues(...values)`
    
* TODO:
    



<div class="description">
    <p>Tell the spy to return one of the specified values (sequentially) each time the spy is invoked.</p>
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
            
                <td class="name"><code>values</code></td>
            

            <td class="type">
            
                
<span class="param-type">*</span>


            
            </td>

            
                <td class="attributes">
                

                

                
                    &lt;repeatable><br>
                
                </td>
            

            

            <td class="description last"><p>Values to be returned on subsequent calls to the spy.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.1.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>




















        
            

    

    
## `stub()`
    

    



<div class="description">
    <p>Tell the spy to do nothing when invoked. This is the default.</p>
</div>













<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>




















        
            

    

    
## `throwError(something)`
    

    



<div class="description">
    <p>Tell the spy to throw an error when invoked.</p>
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
            
                <td class="name"><code>something</code></td>
            

            <td class="type">
            
                
<span class="param-type">Error</span>
|

<span class="param-type">Object</span>
|

<span class="param-type">String</span>


            
            </td>

            

            

            <td class="description last"><p>Thing to throw</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>
    
