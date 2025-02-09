---
layout: default
title: "Namespace: calls"
prettify: true
---

# Methods

        
            

    

    
## class="name" id="all"><span class="type-signature"></span>all<span class="signature">()</span><span class="type-signature"> &rarr; {Array.&lt;<a href="Spy.html#.callData">Spy.callData</a>>}</span></h4>
    

    



<div class="description">
    <p>Get the raw calls array for this spy.</p>
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
        
<span class="param-type">Array.&lt;<a href="Spy.html#.callData">Spy.callData</a>></span>


    </dd>
</dl>

    





        
            

    

    
## class="name" id="allArgs"><span class="type-signature"></span>allArgs<span class="signature">()</span><span class="type-signature"> &rarr; {Array}</span></h4>
    

    



<div class="description">
    <p>Get all of the arguments for each invocation of this spy in the order they were received.</p>
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
        
<span class="param-type">Array</span>


    </dd>
</dl>

    





        
            

    

    
## class="name" id="any"><span class="type-signature"></span>any<span class="signature">()</span><span class="type-signature"> &rarr; {Boolean}</span></h4>
    

    



<div class="description">
    <p>Check whether this spy has been invoked.</p>
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
        
<span class="param-type">Boolean</span>


    </dd>
</dl>

    





        
            

    

    
## class="name" id="argsFor"><span class="type-signature"></span>argsFor<span class="signature">(index)</span><span class="type-signature"> &rarr; {Array}</span></h4>
    

    



<div class="description">
    <p>Get the arguments that were passed to a specific invocation of this spy.</p>
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
            
                <td class="name"><code>index</code></td>
            

            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>

            

            

            <td class="description last"><p>The 0-based invocation index.</p></td>
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
        
<span class="param-type">Array</span>


    </dd>
</dl>

    





        
            

    

    
## `count() ->Integer`

* number of spy's invocations

## class="name" id="first"><span class="type-signature"></span>first<span class="signature">()</span><span class="type-signature"> &rarr; {ObjecSpy.callData}</span></h4>
    

    



<div class="description">
    <p>Get the first invocation of this spy.</p>
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
        
<span class="param-type">ObjecSpy.callData</span>


    </dd>
</dl>

## `mostRecent() -> ObjecSpy.callData`

* get the MOST recent spy's invocation
    
## class="name" id="reset"><span class="type-signature"></span>reset<span class="signature">()</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    <p>Reset this spy as if it has never been called.</p>
</div>













<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.0.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>




















        
            

    

    
## class="name" id="saveArgumentsByValue"><span class="type-signature"></span>saveArgumentsByValue<span class="signature">()</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    <p>Set this spy to do a shallow clone of arguments passed to each invocation.</p>
</div>













<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>2.5.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>




















        
            

    

    
## class="name" id="thisFor"><span class="type-signature"></span>thisFor<span class="signature">(index)</span><span class="type-signature"> &rarr; (nullable) {Object}</span></h4>
    

    



<div class="description">
    <p>Get the &quot;this&quot; object that was passed to a specific invocation of this spy.</p>
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
            
                <td class="name"><code>index</code></td>
            

            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>

            

            

            <td class="description last"><p>The 0-based invocation index.</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.8.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>















<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Object</span>


    </dd>
</dl>

    





        
    

    

    
</article>
